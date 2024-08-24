import React from 'react'

const Hello = (props) => {
  return (
    <div style={{backgroundColor:"black",color:"tomato"}}>
        <h1>Hello To All</h1>
        {props.children}
        </div>
  )
}

export default Hello