let dark = document.getElementById("Dark");
let light = document.getElementById("Light");
let body = document.querySelector("body");
let heading = document.getElementById("heading");
let = dark.onclick = function () {
  body.style.backgroundColor = "black";
  heading.style.color = "white";
};
light.onclick = function () {
  body.style.backgroundColor = "gray";
  heading.style.color = "red";
};
