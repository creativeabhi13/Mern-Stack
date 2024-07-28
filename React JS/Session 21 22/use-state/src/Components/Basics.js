import React,{useState} from 'react'

console.log("I am outside");
let a=100;
const Basics = () => {

let [count,setCount]=useState(100);
// now the value of count is stored in the state. 
// The value of count is 100.
// the value of a is 100 as well but the value of a is not stored in the state.
console.log("I am inside",count,a);

function increase(){
   setCount(count+1);
}

function increase1(){
    a=a+1;
    console.log(a);
}

// as soon as the value of count is updated the component will (loading) re-render and the updated value will be displayed in the UI.
// ui is updated when the value of count is updated.

  return (
    <div>
        <h1>UseState : {count}</h1>
        <button onClick={increase}>Increase</button>
      

        <h1>Normal : {a}</h1>
        <button onClick={increase1}>Increase</button>
        {/* Normal varibale  reset  */}
    </div>
  )
}
export default Basics



 // updating the value of a will not reflect in the UI because the value of a is not stored in the state.
    // To update the UI we need to store the value of a in the state.
    // normal variable a is not stored in the state.
// normal will not be updated 
    // useState()
    // To store the value of a in the state we need to use the useState hook.
    // The useState hook is a function that takes an argument and returns an array of two elements.
    // The first element of the array is the value of the argument passed to the useState function.
    // The second element of the array is a function that is used to update the value of the argument
    // passed to the useState function.

// console.log(x[0]); //100
// console.log(x[1]);// function
// let count = x[0];
// let func = x[1];
// let x = [100, function];
// let [count, func] = x;
    // console.log(x[0]); //100
// console.log(x[1]);// function
// let count = x[0];
// let func = x[1];
// let x = [100, function];
// let [count, func] = x;

// const Basics = () => {

//     let a=10;

//     const increase = () => {
//         a=a+1;
//         console.log(a);
//     }
 
//   return (
//     <div>
//         <h1>{a}</h1>
//         <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// export default Basics