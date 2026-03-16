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
function addTask() {
  let inputTask = document.getElementById("task");
  let taskValue = inputTask.value;
  let li = document.createElement("li");
  li.innerText = taskValue;
  list.appendChild(li);
  inputTask.value;
}
