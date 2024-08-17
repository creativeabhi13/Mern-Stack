// pizza order program

// 1. Create a program that takes pizza orders.
// 2. Create 3 different pizzas, small, medium, and large.
// 3. Create a function that takes order details as input and returns the total cost.
// 4. Print the pizza order details and the total cost.

// 1. Create a program that takes pizza orders.

// setTimeout(()=>{
//     order();
// },2000);

// setTimeout(()=>{
//     cook();
// }   ,3000);

// setTimeout(()=>{
//     pack();
// }  ,4000);

// setTimeout(()=>{
//     deliver();
// }   ,5000);



// function order(){
//     console.log("Pizza order program");
// }

// function cook(){
//     console.log("Pizza is being cooked");
// }

// function pack(){
//     console.log("Pizza is being packed");
// }

// function deliver(){
//     console.log("Pizza is being delivered");
// }

// callback hell

setTimeout(()=>{console.log("Pizza is ordered ")
setTimeout(()=>{console.log("Pizza is being cooked")
setTimeout(()=>{console.log("Pizza is being packed")
    setTimeout(()=>{console.log("Pizza is being delivered")
    },4000);
},1000);
},2000);
},3000);

