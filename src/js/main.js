function bind() {
  $("#start-daily-examen").click(startExamen);
  $("#close-daily-examen").click(closeExamen);
  $("#gratitude-form").submit(setGratitude);
  $(".next-btn").click(nextStep);
  $(".prev-btn").click(prevStep);
}

function finishInit() {
  // bind input
  bind();
  $("#grateful-input").focus();

  chrome.identity.getProfileUserInfo(function(user) {
    console.log(user.email);
  });

  setInterval(updateClock, 1000);
}
document.addEventListener("DOMContentLoaded", function() {
  $("body").css("display", "none");
  initGratitude();
  let hour = new Date().getHours();
  if (hour >= 17 || hour <= 2) {
    $(".gratitude").css("top", "80vh");
    $("#start-daily-examen").show();
  }
  updateClock();
  //$(window).on("load", () => {
  if (localStorage.getItem("reference")) {
    $("#background-image")
      .on("load", () => {
        $("#background-image").show();
        $("#text").html(localStorage.getItem("text"));
        $("#reference").html(localStorage.getItem("reference"));
        $("body").fadeIn(300, finishInit);
      })
      .attr("src", localStorage.getItem("img_uri"));
  } else {
    $.get(HOST + "/public/daily_verse.json", data => {
      localStorage.setItem("text", data.text);
      localStorage.setItem("reference", data.reference);
      $.get(HOST + "/public/daily_image.json", function(data) {
        $("#background-image")
          .on("load", () => {
            $("#background-image").show();
            $("#text").html(localStorage.getItem("text"));
            $("#reference").html(localStorage.getItem("reference"));
            $("body").fadeIn(300, finishInit);
          })
          .attr("src", data.src);
        localStorage.setItem("img_uri", data.src);
        localStorage.setItem("img_id", data.id);
      });
    });
  }
});
