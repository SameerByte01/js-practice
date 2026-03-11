// // // let Marks = 9100;
// // // if (Marks > 100) {
// // //     console.log("undifined");
// // // }
// // // else if (Marks < 1) {
// // //     console.log("undifined");
// // // }

// // // else if (Marks >= 90) {
// // //     console.log("result A+");
// // // }
// // // else if (Marks >= 80) {
// // //     console.log("result A");
// // // }
// // // else if (Marks >= 60) {
// // //     console.log("result B");
// // // }
// // // else if (Marks >= 40) {
// // //     console.log("result C");
// // // }
// // // else{
// // //     console.log("fail");
// // // }

// // let num = 4;
// // if (num % 2 == 1) {
// //     console.log("odd");   
// // }
// // else{
// //     console.log("even");
    
// // }

// let light = "pink";

// if (light == "green") {
//     console.log("Walk!");
    
// }
// else if (light == "Red") {
//     console.log("stop!");   
// }

// else if (light == "Yellow") {
//     console.log("ready to go");
    
// }
// else{
//    console.log("invelid color");
    
// }
// ...

// let color =prompt("check colors to run");

// if (color === "green") {
//     console.log("go!!!");
// }
// else if (color === "yellow") {
//     console.log("ready to go!!!");
    
// } 
// else if(color === "red") {
//     console.log("stop!!!");
    
// }
// else {
//     console.log("invalid");
    
// }
// let litrprice = 150;
// let price = Number(prompt("enter a price."))
// let litr = price / litrprice;
// switch (true) {
//     case (price > 0):
//         console.log(litr + " liters."  );
     
//         break;

//     default:
//         console.log("invelid amount");
        
//         break;
// }\

// let a = prompt("please slect (1:burger , 2:pizzA, 3:OTHERS)");
// \
// switch (true) {
//     case a === "1":
//         console.log("your choise is burger");
        
//         break;
//     case a === "2":
//         console.log("your choise is pizza");
        
//         break;
//     case a==="3":
//         console.log("your choise is other");
        
//         break;

//     default:
//         console.log("sorry");
        
//         break;
// }

let std =["@gmail.com", "s11"]
let email = prompt("enter your email")
let pasword = prompt("enter your password")

// switch (true) {
//     case (email == std[0] && pasword == std[1]):
//         console.log("correct");
//         break;
//     case (email !== std[0] && pasword !== std[1]):
//         console.log("incorect ");
//         break;
        
//     case (email !== std[0]):
//         console.log("email is incorrect");
//         break;
//     case (pasword !== std[1]):
//         console.log("pasword is incorrect");
//         break;

//     default:
//         console.log("invelid");
//         break;
// }

if (email == std[0] && pasword == std[1]) {
    console.log("corect");
    
} 
else if (email !== std[0] && pasword !== std[1]){
    console.log("incorecet");
    
}
else if (email !== std[0]){
    console.log("email is incorecet");
    
}
else if (pasword !== std[1]){
    console.log("pasword is incorecet");
    
}
else {
    
}



