import React, { useState } from 'react'

const ButtonAction = () => {
    const [btnClicked, setBtnClicked] = useState(false);
    let paraText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  return (
    <div>
        <button 
        onClick={() => setBtnClicked(true)} 
        >Render Paragraph</button>
        {/* <p>{btnClicked ? paraText:""}</p> */}

        {btnClicked && <p>{paraText}</p>}
    </div>
  )
}

export default ButtonAction