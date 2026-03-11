// let color = prompt(`Enter a color `);
// let a = "red";
// let b ="yellow";
// let c ="green";
// try {
//     if (color !== a && color !== b && color !== c) {
//         console.log("invalid color");
//     }
//     else if(color == a){
//         console.log("stop!");
        
//     }
//     else if (color == b){
//         console.log("run");
        
//     }
//     else{
//         console.log("ready");
        
//     }
// } catch (error) {
//     console.log("ERROR :" ,error);
    
// }finally{
//     console.log("thanks for waiting..");
    
// }
// let amount = 50000;
// let withdrwal =Number(prompt("Enter your amount"));
// let a = 0;
// try {
//     if (withdrwal > amount || withdrwal <= a) {
//         // throw ("invalid amount!!");
//         console.log("inficient amount");
        
//     }
//     else if(withdrwal <= amount) {
//     amount = amount - withdrwal;
//     console.log("withdrawl sucessfully");
//     console.log("remaining amount", amount );
//     }

// } catch (error) {
//     console.log("error", MessageEvent);
// }finally{
//     console.log("thanks for using  this site");
    
// }
// let num = Number(prompt("write a number"));

// try {
//     if (isNaN(num) || num < 0) {
//         throw new Error("Invalid Number");
//     }    
//     console.log("Valid");
    
// } catch (error) {
//     console.log(error.message);
    
// }
    
// try {
//     let input = prompt("write a number.");

//     if (input.trim() === "")  {
//         throw new Error("input can not be empty");
        
//     }
    
//     if (input % 2 == 0) {
//         throw new Error("even");
        
//     }
//     if(input % 2 == 1){
//         throw new Error("odd");
        
//     }
    
// } catch (error) {
//     console.log(error.message);
    
// }

try {
    let age = (prompt("Enter your age."));
    if(age.trim() === ""){
        throw new Error("Input cannot be Empty");

    }
    let numAge = Number(age);
    if(isNaN(numAge)){
        throw new Error("only number allowed");
        
    }
    if(numAge < 0 ){
        throw new Error("Invalid");
        
    }
    if(numAge > 100){
        throw new Error("you entered an unrealistic age");
        
    }
    if(numAge < 18){
        throw new Error("you are underage");
        
    }
    if(numAge >= 18 ){
        console.log("you are an adult");
        
        
    }
} catch (error) {
    console.log(error.message);
    
}

