"use strict";function updateClock() {
  var date = new Date();
  var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes =
  date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  $("#clock").html(hour + ":" + minutes);
}