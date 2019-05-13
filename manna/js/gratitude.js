"use strict";function setGratitude(e) {
  e.preventDefault();
  localStorage.setItem("daily_gratitude", $("#grateful-input").val());
  $("#gratitude-form").fadeOut(300, function () {
    $("#response").html(localStorage.getItem("daily_gratitude"));
    $("#stored-gratitude").fadeIn(300);
  });
}
function initGratitude() {
  var active_date = new Date();
  var day = active_date.getDate();
  var month = active_date.getMonth();
  var year = active_date.getFullYear();
  var date = year + "-" + (month + 1) + "-" + day;
  var hour = active_date.getHours();
  if (localStorage.getItem("active_date") !== date) {
    localStorage.setItem("active_date", date);
    localStorage.setItem("daily_gratitude", "");
    localStorage.setItem("img_uri", "");
    localStorage.setItem("reference", "");
    localStorage.setItem("text", "");
  }
  if (localStorage.getItem("daily_gratitude")) {
    $("#gratitude-form").hide();
    $("#response").html(localStorage.getItem("daily_gratitude"));
    $("#stored-gratitude").show();
  }
}