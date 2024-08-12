import React,{useState} from 'react'


// hello function will be called only once when the component is rendered for the first time but unneccsarly it will be called on every re-render
// if we call the function directly inside the useState then it will be called on every re-render
// function hello(){
//     console.log('Hello');
//     return 0;
// }

const Lazy = () => {
    // use callback function to call the function only once
    let [count, setCount] = useState(()=>{
        console.log('Hello');
        return 0;
    });

    const inc = () => {
        setCount(count + 1);
    }

  return (
   
    <div>
        <h1>UseState: {count}</h1>
        <button onClick={inc}>Update</button>
    </div>
  )
}

export default Lazy