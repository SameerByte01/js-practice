// let dark = document.getElementById("Dark");
// let light = document.getElementById("Light");
// let body = document.querySelector("body");
let heading = document.getElementById("heading");

// dark.onclick = function () {
//   body.style.backgroundColor = "black";
//
// };
// light.onclick = function () {
//   body.style.backgroundColor = "gray";
//   heading.style.color = "red";
// };

function changecolors() {
  let colors = [
    "red",
    "green",
    "blue",
    "pink",
    "orange",
    "purpule",
    "black",
    "white",
  ];

  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
  console.log((document.body.style.backgroundColor = colors[random]));
}
console.log(Math.random());
