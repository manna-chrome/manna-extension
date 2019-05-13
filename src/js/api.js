// const HOST = "http://localhost:7777/manna";
const HOST = "https://manna-chrome-extension.herokuapp.com/manna";
let img_src;
function getVerse() {
  if (localStorage.getItem("text") && localStorage.getItem("reference")) {
    $("#text").html(localStorage.getItem("text"));
    $("#reference").html(localStorage.getItem("reference"));
  }
  $.get(HOST + "/public/daily_verse.json", function(data) {
    if ($("#reference").html() !== data.reference) {
      $("#text").html(data.text);
      $("#reference").html(data.reference);
      localStorage.setItem("text", data.text);
      localStorage.setItem("reference", data.reference);
    }
  });
}
function getImage() {
  if (localStorage.getItem("img_uri") && localStorage.getItem("img_id")) {
    $("#background-image")
      .on("load", () => {
        alert("image loaded");
        $("#background-image").show();
      })
      .attr("src", localStorage.getItem("img_uri"));
  }
  $.get(HOST + "/public/daily_image.json", function(data) {
    if (localStorage.getItem("img_id") != data.id) {
      $("#background-image").attr("src", data.src);
      $("#background-image").show();
      localStorage.setItem("img_uri", data.src);
      localStorage.setItem("img_id", data.id);
    }
  });
}
