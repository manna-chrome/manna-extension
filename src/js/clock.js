function updateClock() {
  let date = new Date();
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  $("#clock").html(hour + ":" + minutes);
}
