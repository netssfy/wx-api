package com.github.niefy.modules.wx.controller;

import com.github.niefy.modules.wx.service.WxAccountService;
import me.chanjar.weixin.common.bean.oauth2.WxOAuth2AccessToken;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;

@RestController
public class RedirectController {

  private Logger logger = LoggerFactory.getLogger(RedirectController.class);

  @Value("${wx.mp.oauthRedirectUrl}")
  private String oauthRedirectUrl;

  @Autowired
  private WxMpService wxMpService;

  @Autowired
  private WxAccountService wxAccountService;

  private final String state = "tb-wx-api";

  @GetMapping("/mp/redirect")
  public void Redirect(
      @RequestParam("siteurl") String siteUrl,
      @RequestParam String scope,
      HttpServletRequest req,
      HttpServletResponse resp) throws IOException {

    logger.debug("/mp/redirect siteurl = {}, scope = {}", siteUrl, scope);

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

    logger.debug(wxRedirect);

    resp.sendRedirect(wxRedirect);
  }

  @GetMapping("/mp/code-callback")
  public void Callback(
      @RequestParam String code,
      @RequestParam String state,
      @RequestParam String scope,
      @RequestParam String site,
      HttpServletResponse resp) throws IOException {

    logger.debug("/mp/code-callback code = {}, state = {}, scope = {}, site = {}", code, state, scope, site);

    try {
      WxOAuth2AccessToken userAuthToken = wxMpService.getOAuth2Service().getAccessToken(code);

      resp.sendRedirect(UriComponentsBuilder
          .fromHttpUrl(site)
          .queryParam("openid", userAuthToken.getOpenId())
          .queryParam("ApiSnsapiStatus", 1)
          .toUriString()
      );

    } catch (WxErrorException e) {
      logger.error(e.getMessage(), e);

      resp.sendRedirect(UriComponentsBuilder
          .fromHttpUrl(site)
          .queryParam("ApiSnsapiStatus", 2)
          .toUriString()
      );
    }
  }

  @GetMapping("/mp/test-redirect")
  public String TestRedirect(@RequestParam String openid, @RequestParam("ApiSnsapiStatus") int status) {
    return String.format("openid = %s, status = %d", openid, status);
  }

//  @GetMapping("/mp/mock-wx-server")
//  public void Mock(@RequestParam("redirect_uri") String uri, HttpServletResponse resp) throws IOException {
//    resp.sendRedirect(uri + "&code=mockcode&state=mockstate");
//  }
}
