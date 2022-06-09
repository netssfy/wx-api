package com.github.niefy.modules.wx.dao;

import com.github.niefy.modules.wx.entity.WxMsg;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.Instant;
import java.util.List;
import java.util.Map;

public interface WxMsgRepo extends CrudRepository<WxMsg, Long> {

  @Query(value = "select case n.event_key when 'qrscene_524' then '大贸' else '海外' end as event, n.date, count(1) as count from ( " +
      "select date(create_time) as date, event_key from wx_msg where event_key in ('qrscene_524', 'qrscene_525') " +
      "and create_time > :start and create_time <= :end) n " +
      "group by n.event_key, n.date " +
      "order by event, date", nativeQuery = true)
  List<Map<String, Object>> getEventStatistic(Instant start, Instant end);


  @Query(value = "select case n.event_key when '524' then '大贸' else '海外' end as event, n.date, count(1) as count from ( " +
      "select date(create_time) as date, event_key from wx_msg where event_key in ('524', '525') " +
      "and create_time > :start and create_time <= :end) n " +
      "group by n.event_key, n.date " +
      "order by event, date", nativeQuery = true)
  List<Map<String, Object>> getScanEventStatistic(Instant start, Instant end);

}
