function setGratitude(e) {
  e.preventDefault();
  localStorage.setItem("daily_gratitude", $("#grateful-input").val());
  $("#gratitude-form").fadeOut(300, function() {
    $("#response").html(localStorage.getItem("daily_gratitude"));
    $("#stored-gratitude").fadeIn(300);
  });
}
function initGratitude() {
  let active_date = new Date();
  let day = active_date.getDate();
  let month = active_date.getMonth();
  let year = active_date.getFullYear();
  let date = year + "-" + (month + 1) + "-" + day;
  let hour = active_date.getHours();
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
