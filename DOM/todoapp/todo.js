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

// function darktheme() {
//   let body = document.querySelector("body");
//   body.style.backgroundColor = "black";
//   list.style.color = "white";
// }

// function lighttheme() {
//   let body = document.querySelector("body");
//   body.style.backgroundColor = "pink";
//   list.style.color = "black";
// }

// function addTask() {
//   let inputtask = document.getElementById("task");
//   let taskvalue = inputtask.Value;
//   let li = document.createElement("li");
//   li.innerText = taskvalue;
//   document.getElementById("list").appendChild(li);
//   inputtask.Value = "";
// }

// =========
// =========delete===================================
// console.log(theme);
// let theme = document.querySelector("body");

// function darktheme() {
//   theme.style.backgroundColor = "black";
//   list.style.color = "white";
// }

// lighttheme = () => {
//   theme.style.backgroundColor = "white";
//   list.style.color = "black";
// };

// function addItem() {
//   let task = document.getElementById("input");
//   taskvalue = task.value;
//   let li = document.createElement("li");
//   li.innerText = task.value;
//   document.getElementById("list").appendChild(li);
//   task.value = "";
// }

// ========================================================================

// let theme = document.querySelector("body");
// let input = document.getElementById("input");
// let todolist = document.querySelector("#list");
// list = [];
// // darktheme = () => {
// //   theme.style.backgroundColor = "black";
// //   list.style.color = "white";
// // };

// lighttheme = () => {
//   theme.style.backgroundColor = "white";
// };

// let todoapp = {
//   addItem() {
//     if (input.value) {
//       list.push(input.value);
//       input.value = "";
//     }
//     this.mainfun();
//   },
//   mainfun() {
//     todolist.innerHTML = "";
//     list.forEach((value, index) => {
//       todolist.innerHTML += `<li> ${value}
//       <button onclick = "todoapp.delete(${index})">x</button></li>`;
//     });
//   },
//   delete(index) {
//     list.splice(index, 1);
//     this.mainfun();
//   },
//   clearAll() {
//     list.splice(0, list.length);
//     this.mainfun();
//   },

//   // darktheme() {
//   //   theme.style.backgroundColor = "black";
//   //   list.style.color = "white";
//   //   this.mainfun();
//   // },
// };
// ==================================
// let theme = document.querySelector("body");
// let myinput = document.getElementById("input");
// let todolist = document.querySelector("#list");
// list = [];

// let todoapp = {
//   addItem() {
//     if (input.value) {
//       list.push(input.value);
//       input.value = "";
//     }
//   },
//   myfun,
// };

// ==============================================================
