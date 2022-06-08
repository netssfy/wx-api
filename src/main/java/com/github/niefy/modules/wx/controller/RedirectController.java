package com.github.niefy.modules.wx.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.niefy.modules.wx.dao.WxUserExRepo;
import com.github.niefy.modules.wx.entity.WxUser;
import com.github.niefy.modules.wx.entity.WxUserEx;
import com.github.niefy.modules.wx.service.WxAccountService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.chanjar.weixin.common.bean.WxOAuth2UserInfo;
import me.chanjar.weixin.common.bean.oauth2.WxOAuth2AccessToken;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.result.WxMpUser;
import me.chanjar.weixin.mp.config.WxMpConfigStorage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.Map;
import java.util.Optional;

@RestController
@Slf4j
public class RedirectController {

//  private Logger logger = LoggerFactory.getLogger(RedirectController.class);

  @Value("${wx.mp.oauthRedirectUrl}")
  private String oauthRedirectUrl;

  @Autowired
  private WxMpService wxMpService;

  @Autowired
  private WxAccountService wxAccountService;

  @Autowired
  private WxUserExRepo wxUserExRepo;

  private final String state = "tb-wx-api";

  @GetMapping("/mp/redirect")
  public void Redirect(
      @RequestParam("siteurl") String siteUrl,
      @RequestParam String scope,
      HttpServletRequest req,
      HttpServletResponse resp) throws IOException {

    log.debug("/mp/redirect siteurl = {}, scope = {}", siteUrl, scope);

    String redirectUri = UriComponentsBuilder
        .fromHttpUrl(oauthRedirectUrl)
        .queryParam("site", siteUrl)
        .queryParam("scope", scope)
        .toUriString();

//    String mockUrl = UriComponentsBuilder.fromHttpUrl("http://localhost:8088/wx/mp/mock-wx-server")
//        .queryParam("redirect_uri", redirectUri)
//        .toUriString();
//
//    resp.sendRedirect(mockUrl);

    String wxRedirect = wxMpService.getOAuth2Service().buildAuthorizationUrl(
        redirectUri,
        scope,
        state
    );

    log.debug(wxRedirect);

    resp.sendRedirect(wxRedirect);
  }

  @GetMapping("/mp/code-callback")
  public void codeCallback(
      @RequestParam String code,
      @RequestParam String state,
      @RequestParam String scope,
      @RequestParam String site,
      HttpServletResponse resp) throws IOException {

    log.debug("/mp/code-callback code = {}, state = {}, scope = {}, site = {}", code, state, scope, site);

    try {
      WxOAuth2AccessToken userAuthToken = wxMpService.getOAuth2Service().getAccessToken(code);

      if ("snsapi_userinfo".equals(scope)) {
        WxUserEx wxUserEx = new WxUserEx();
        wxUserEx.setAccessToken(userAuthToken.getAccessToken());
        wxUserEx.setExpiresIn(userAuthToken.getExpiresIn());
        wxUserEx.setOpenId(userAuthToken.getOpenId());
        wxUserEx.setScope(userAuthToken.getScope());
        wxUserEx.setRefreshToken(userAuthToken.getRefreshToken());
        wxUserEx.setUnionId(userAuthToken.getUnionId());

        wxUserExRepo.save(wxUserEx);
      }

      resp.sendRedirect(UriComponentsBuilder
          .fromHttpUrl(site)
          .queryParam("openid", userAuthToken.getOpenId())
          .queryParam("ApiSnsapiStatus", 1)
          .toUriString()
      );

    } catch (WxErrorException e) {
      log.error(e.getMessage(), e);
      json(resp, "weixin request access token failed " + e.getError().getErrorCode());
    }
  }

  @GetMapping("/mp/test-redirect")
  public String TestRedirect(@RequestParam String openid, @RequestParam("ApiSnsapiStatus") int status) {
    return String.format("openid = %s, status = %d", openid, status);
  }

  @PostMapping("/mp/wxaccesstoken")
  public void getWxAccessToken(@RequestBody WxAccessTokenRequest request, HttpServletResponse resp) throws IOException {
    WxMpConfigStorage wxMpConfigStorage = wxMpService.getWxMpConfigStorage();

    if (wxMpConfigStorage.getAppId().equals(request.getWxAppId()) &&
        wxMpConfigStorage.getSecret().equals(request.getWxAppSecret())) {
      String accessToken = null;
      try {
        accessToken = wxMpService.getAccessToken();
      } catch (WxErrorException e) {
        log.error(e.getMessage(), e);
        json(resp, "request failed on error code " + e.getError().getErrorCode());
        return;
      }
      json(resp, new WxAccessTokenResponse(accessToken, null));
    } else {
      json(resp, new StatusInfo(-1, "appid or appsecret is not correct"));
    }
  }

  @GetMapping("/mp/wxusertoken")
  public void userToken(@RequestParam() String openid, HttpServletResponse resp) throws IOException {
    WxUserEx wxUserEx = wxUserExRepo.findById(openid).orElse(null);
    if (wxUserEx == null) {
      json(resp, new StatusInfo(-1, "access token for this openid is not authorized yet, please get user permission"));
      return;
    }

    boolean currentAccessTokenValid = wxUserEx.getUpdatedAt().plusSeconds(7000).isBefore(Instant.now());
    boolean currentRefreshTokenValid = wxUserEx.getCreatedAt().plus(29, ChronoUnit.DAYS).isBefore(Instant.now());

    if (currentAccessTokenValid) {
      json(resp, wxUserEx);
      return;
    } else {
      if (currentRefreshTokenValid) {
        try {
          WxOAuth2AccessToken wxOAuth2AccessToken = wxMpService.getOAuth2Service().refreshAccessToken(wxUserEx.getRefreshToken());
          wxUserEx = new WxUserEx();
          wxUserEx.setAccessToken(wxOAuth2AccessToken.getAccessToken());
          wxUserEx.setExpiresIn(wxOAuth2AccessToken.getExpiresIn());
          wxUserEx.setOpenId(wxOAuth2AccessToken.getOpenId());
          wxUserEx.setScope(wxOAuth2AccessToken.getScope());
          wxUserEx.setRefreshToken(wxOAuth2AccessToken.getRefreshToken());
          wxUserEx.setUnionId(wxOAuth2AccessToken.getUnionId());

          wxUserExRepo.save(wxUserEx);
          json(resp, wxOAuth2AccessToken);
        } catch (WxErrorException e) {
          json(resp, "request failed on error code " + e.getError().getErrorCode());
          return;
        }
      } else {
        json(resp, new StatusInfo(-1, "access token for this openid has expired, please get user permission"));
        return;
      }
    }
  }

  @GetMapping("/mp/userinfo")
  public void userInfo(@RequestParam(required = false) String openid, HttpServletResponse resp) throws IOException {
    if (!StringUtils.hasLength(openid)) {
      json(resp, new ErrorInfo(100, "参数不正确"));
      return;
    }

    try {
      WxMpUser wxMpUser = wxMpService.getUserService().userInfo(openid);
      log.info(wxMpUser.toString());

      if (!wxMpUser.getSubscribe()) {
        WxUserEx wxUserEx = wxUserExRepo.findById(openid).orElse(null);
        if (wxUserEx == null) {
          json(resp, new StatusInfo(-1, "access token for this openid is not authorized yet, please get user permission"));
        } else {
          WxOAuth2UserInfo wxOAuth2UserInfo = getOAuth2UserInfo(wxUserEx);
          if (wxOAuth2UserInfo != null) {
            WxOAuth2UserInfoDto dto = new WxOAuth2UserInfoDto(wxOAuth2UserInfo);
            dto.setSubscribe(0);
            json(resp, dto);
          } else {
            json(resp, new StatusInfo(-1, "access token for this openid has expired, please get user permission"));
          }
        }
      } else {
        // update union id
        WxUserEx wxUserEx = wxUserExRepo.findById(openid).orElse(null);
        if (wxUserEx != null) {
          wxUserEx.setUnionId(wxMpUser.getUnionId());
          wxUserExRepo.save(wxUserEx);
        }
        json(resp, new WxMpUserDto(wxMpUser));
      }
    } catch (WxErrorException e) {
      log.error(e.getMessage(), e);
      json(resp, "request failed on error code " + e.getError().getErrorCode());
    }
  }

//  @GetMapping("/mp/mock-wx-server")
//  public void Mock(@RequestParam("redirect_uri") String uri, HttpServletResponse resp) throws IOException {
//    resp.sendRedirect(uri + "&code=mockcode&state=mockstate");
//  }

  private WxOAuth2UserInfo getOAuth2UserInfo(WxUserEx wxUserEx) throws WxErrorException {
    boolean currentAccessTokenValid = wxUserEx.getUpdatedAt().plusSeconds(7000).isBefore(Instant.now());
    boolean currentRefreshTokenValid = wxUserEx.getCreatedAt().plus(29, ChronoUnit.DAYS).isBefore(Instant.now());

    WxOAuth2AccessToken wxOAuth2AccessToken = null;

    if (currentAccessTokenValid) {
      wxOAuth2AccessToken = new WxOAuth2AccessToken();
      wxOAuth2AccessToken.setAccessToken(wxUserEx.getAccessToken());
      wxOAuth2AccessToken.setOpenId(wxUserEx.getOpenId());
    } else if (currentRefreshTokenValid) {
      wxOAuth2AccessToken = wxMpService.getOAuth2Service().refreshAccessToken(wxUserEx.getRefreshToken());

      wxUserEx = new WxUserEx();
      wxUserEx.setAccessToken(wxOAuth2AccessToken.getAccessToken());
      wxUserEx.setExpiresIn(wxOAuth2AccessToken.getExpiresIn());
      wxUserEx.setOpenId(wxOAuth2AccessToken.getOpenId());
      wxUserEx.setScope(wxOAuth2AccessToken.getScope());
      wxUserEx.setRefreshToken(wxOAuth2AccessToken.getRefreshToken());
      wxUserEx.setUnionId(wxOAuth2AccessToken.getUnionId());

      wxUserExRepo.save(wxUserEx);
    } else {
      return null;
    }

    return wxMpService.getOAuth2Service().getUserInfo(wxOAuth2AccessToken, "zh_CN");
  }

  private void json(HttpServletResponse resp, Object data) throws IOException {
    resp.setContentType("application/json;charset=utf-8");
    resp.getWriter().write(JSON.toJSONString(data, SerializerFeature.WriteMapNullValue));
  }

  @Data
  @AllArgsConstructor
  public static class ErrorInfo {
    private int code;
    private String msg;
  }

  @Data
  @AllArgsConstructor
  public static class StatusInfo {
    private int status;
    private String msg;
  }

  @Data
  public static class WxOAuth2UserInfoDto extends WxOAuth2UserInfo {
    private int subscribe;

    public WxOAuth2UserInfoDto(WxOAuth2UserInfo data) {
      setOpenid(data.getOpenid());
      setNickname(data.getNickname());
      setSex(data.getSex());
      setCity(data.getCity());
      setProvince(data.getProvince());
      setCountry(data.getCountry());
      setHeadImgUrl(data.getHeadImgUrl());
      setUnionId(data.getUnionId());
      setPrivileges(data.getPrivileges());
    }
  }

  @Data
  public static class WxMpUserDto {
    public WxMpUserDto(WxMpUser wxMpUser) {
      subscribe = wxMpUser.getSubscribe() ? 1 : 0;
      openId = wxMpUser.getOpenId();
      nickname = wxMpUser.getNickname();
      language = wxMpUser.getLanguage();
      headImgUrl = wxMpUser.getHeadImgUrl();
      subscribeTime = wxMpUser.getSubscribeTime();
      unionId = wxMpUser.getUnionId();
      remark = wxMpUser.getRemark();
      groupId = wxMpUser.getGroupId();
      tagIds = wxMpUser.getTagIds();
      privileges = wxMpUser.getPrivileges();
      subscribeScene = wxMpUser.getSubscribeScene();
      qrScene = wxMpUser.getQrScene();
      qrSceneStr = wxMpUser.getQrSceneStr();
    }

    private int subscribe;
    private String openId;

    private String nickname;
    private String language;

    private String headImgUrl;
    private Long subscribeTime;

    private String unionId;
    private String remark;
    private Integer groupId;
    private Long[] tagIds;

    private String[] privileges;

    private String subscribeScene;

    private String qrScene;

    private String qrSceneStr;
  }

  @Data
  @NoArgsConstructor
  public static class WxAccessTokenRequest {
    private String wxAppId;
    private String wxAppSecret;
  }

  @Data
  @AllArgsConstructor
  public static class WxAccessTokenResponse {
    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("validsince")
    private Instant validSince;
  }
}
