import React, { useState } from 'react'

const Blog = ({count,setCount}) => {
 
  return (
    <div>
        <h1>Blog Counter</h1>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)} > Increment </button>
        <button onClick={()=>setCount(count-1)} > Decrement</button>
        <button onClick={()=>setCount(0)} > Reset</button>
        
    </div>
  )
}

export default Blog