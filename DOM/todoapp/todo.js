// function addTask() {
//   let taskInput = document.getElementById("task");
//   let tValue = taskInput.value;
//   let li = document.createElement("li");
//   li.innerText = tValue;

//   document.getElementById("list").appendChild(li);
//   // list.appendChild(li); or this.
//   taskInput.value = "";
// }
// ======================================================================1
// function addTask() {
//   let inputTask = document.getElementById("task");
//   let taskValue = inputTask.value;
//   let li = document.createElement("li");
//   li.innerText = taskValue;
//   list.appendChild(li);
//   inputTask.value = "";
// }

// function darktheme() {
//   let body = document.querySelector("body");
//   body.style.backgroundColor = "black";
//   list.style.color = "white";
// }
// function lighttheme() {
//   let body = document.querySelector("body");
//   body.style.backgroundColor = "gray";
//   list.style.color = "black";
// }

function darktheme() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";
  list.style.color = "white";
}

function lighttheme() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "pink";
  list.style.color = "black";
}

function addTask() {
  let inputtask = document.getElementById("task");
  let taskvalue = inputtask.Value;
  let li = document.createElement("li");
  li.innerText = taskvalue;
  document.getElementById("list").appendChild(li);
  inputtask.Value = "";
}
