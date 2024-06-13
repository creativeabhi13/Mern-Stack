// condition
// 1. if
// 2. else  
// 3. else if
// 4. switch
// 5. ternary operator
//  if
//  if(condition){  
//     // code to be executed if the condition is true
// }
// else
// else{            
//     // code to be executed if the condition is false
// }        
// else if
// else if(condition1){
//     // code to be executed if condition1 is true 
// }
// else if(condition2){ 
//     // code to be executed if condition2 is true
// }
// else{    
//     // code to be executed if the condition is false
// }
// switch
// switch(expression){
//     case value1:
//         // code to be executed if expression is equal to value1
//         break;
//     case value2:
//         // code to be executed if expression is equal to value2
//         break;
//     case value3:
//         // code to be executed if expression is equal to value3
//         break;
//     default:
//         // code to be executed if expression is different from all values
// }
// ternary operator
// (condition)?true:false
let a=10;
let b=20;
let c=30;
let d=40;   
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("b is greater than a");
}
if(a>b && a>c && a>d){
    console.log("a is the greatest");
}
else if(b>c && b>d){
    console.log("b is the greatest");
}
else if(c>d){
    console.log("c is the greatest");
}
else{
    console.log("d is the greatest");
}
let x=10;
let y=20;
let z=30;
let result=(x>y)?(x>z)?x:z:(y>z)?y:z;
console.log(result);
let m=10;
let n=20;

let and=m>5 && n<30;
let or=m>5 || n<30;
let not=!(m>5);

console.log(and,or,not);

