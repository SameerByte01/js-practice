// const { Children } = require("react");

let colors = ["red", "yellow", "green"];
console.log(colors);

colors.push("Purple", "pink"); // add element at last in array
console.log(colors);

colors.pop(); // Remove element from last in array
console.log(colors);

colors.unshift("Blue"); //add element in first
console.log(colors);

 colors.shift(); //remove element in first
console.log(colors);

let std_data = ["Sameer", "Ali", "Abbas", "Haider"];
console.log(std_data);

std_data.push("Sakhi");
console.log(std_data);

std_data.pop();
console.log(std_data);

std_data.shift();
console.log(std_data);

std_data.unshift("ali");
console.log(std_data);

console.log(Array.from("sameer"));
console.log(Array.isArray(["A"]));

let studentData = ["name", "rollno", "class", "subject"];
let std = ["Ali", 3, "9th", "english"];
let data = ["ahmad", 2, "9th", "urdu"];
let dat = ["aahmad", 4, "9th", "math"];
studentData.concat(std);
// console.log(child);
