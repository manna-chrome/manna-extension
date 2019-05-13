"use strict";function startExamen() {
  $("#homepage").fadeOut(300);
  $("#introduction").show();
  $("#daily-examen-page").fadeIn(300);
}
function closeExamen() {
  $("#daily-examen-page").fadeOut(300);
  $(".examen-step").fadeOut(300);
  $("#homepage").fadeIn(300);
}
function nextStep(e) {
  e.preventDefault();
  var step = $(this).
  parent().
  parent();
  var next = step.next();
  step.fadeOut(200, function () {
    next.fadeIn(200);
  });
}
function prevStep(e) {
  e.preventDefault();
  var step = $(this).
  parent().
  parent();
  var next = step.prev();
  step.fadeOut(200, function () {
    next.fadeIn(200);
  });
}