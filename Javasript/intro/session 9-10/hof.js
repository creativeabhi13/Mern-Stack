// Hof:Higher Order Function
// 1. A function that takes a function as an argument
// 2. A function that returns a function
// both of the above

// Example 1

// function hello(){
//     console.log("A");
//     return ()=>{
//         console.log("B");
//     }

// }
// let x=hello() // A
// x() //B
// hello()() // A B

// function hello(){
//     console.log("A");
//     return ()=>{
//         console.log("B");
//         return ()=>{
//             console.log("C");
//         }
//     }

// }
// hello(); //A
// hello()(); //A B
// hello()()(); //A B C

// let x=hello(); //A

// let y=x(); //B

// y(); //C

