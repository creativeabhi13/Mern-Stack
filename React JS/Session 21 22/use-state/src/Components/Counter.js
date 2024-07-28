import React,{useState} from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {

  let [count,setCount]=useState(0);

  // function increase(){
  //   setCount(count+1);
  // }

  // function decrease(){
  //   setCount(count-1);
  // }

  // function reset(){
  //   setCount(0);
  // }

  return (
    <>
    <div className='content'>
      <h1>Counter </h1>
      <h2>{count}</h2>

      </div>
      <div className='btn'>
    
      <button onClick={()=>setCount(count+1)}> <FaPlus/> </button>
<button onClick={()=>setCount(count-1)}><FaMinus/></button>
<button onClick={()=>setCount(0)}><GrPowerReset/></button>
      </div>
      </>
  
  )
}

export default Counter;