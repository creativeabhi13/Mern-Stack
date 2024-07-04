// callbacks
// 1. A callback is a function that is passed as an argument to another function.
// 2. This function is executed inside the other function.
// 3. Callbacks are used to perform some action after the execution of another function.
// 4. Callbacks are used to handle asynchronous operations.


function hello(n,fun1){
// n=10+5 = 15
// func = greet
    console.log(n);
    console.log(fun1);
    fun1()
}

// it will fetch error because greet is a function and we are calling it as a function
// let greet = ()=>{ 
//     console.log('Hello World');
//     return 1000;
// }
// // callback function
// hello(10+5,greet());

// correct way to call the function
let greet = ()=>{ 
    console.log('Hello World');
    
}
// callback function approach 1
hello(10+5,greet);
// callback function approach 2
function hello1(n,fun1){
    console.log(n);
fun1();
}

hello1(10+8,()=>{console.log('Hello World 1')});


function sums(fun1){
    
    fun1(5,6);
}

let sum1=  (a,b)=> {
    console.log(a+b)
}
// callback function
sums(sum1);
sums(()=>{sum1(10,20)});