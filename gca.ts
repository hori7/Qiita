function createEvent() {

  var title = 'タイトル';
  //予定時間の設定
  //実行日12:00から
  var startTime = new Date();
  startTime.setHours(12);
  startTime.setMinutes(0);
  //実行日13:00まで
  var endTime = new Date();
  endTime.setHours(13);
  endTime.setMinutes(0);
  //オプションを追加
  var options = {
  //   description:'説明',
  //   location:'場所',
  //   guests:'guests@gmail.com', //ゲスト
  //   sendInvites:true           //招待メールの送信
  }

  //デフォルトカレンダーに予定を作成
  var calendar = CalendarApp.getDefaultCalendar();
  // //IDでカレンダーを指定する場合
  // var calendar = CalendarApp.getCalendarById('{{id}}@group.calendar.google.com');
  var event = calendar.createEvent(title, startTime, endTime, options);
  Logger.log('createEvent: ' + event.getTitle());  //createEvent: title

}