let increasebtn = document.querySelector("#increase");
let decreasebtn = document.querySelector("#decrease");
let deletebtn = document.querySelector("#delete");
let countdisplay = document.querySelector("#count");

increasebtn.addEventListener("click", increasecount);

function increasecount() {
  count++;
  countdisplay.textContent = count;
}
decreasebtn.addEventListener("click", decreasecount);

function decreasecount() {
  count--;
  countdisplay.textContent = count;
}
deletebtn.addEventListener("click", deletecount);

function deletecount() {
  count = 0;
  countdisplay.textContent = count;
}



