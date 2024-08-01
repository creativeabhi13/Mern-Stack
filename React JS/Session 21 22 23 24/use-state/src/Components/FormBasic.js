import React, { useState } from 'react'

const FormBasic = () => {
const [name, setName] = useState("");
const [btnClick, setBtnClick] = useState(false);

console.log(name,btnClick);
const handleSubmit = (e) => {
    e.preventDefault();
setBtnClick(true);
   
}

 const updateName = (e) => {
    setName(e.target.value);
    if(btnClick===true){
        setBtnClick(false);
    }
  }
  return (
    <div>
        <h1> Form Basic</h1>

        <form onSubmit={handleSubmit}>

          
            <input type="text" id="name" name="name" placeholder='Enter Your Name' onChange={updateName} />
            
            <button type="submit" >Submit</button>
        </form>
<p>
    {btnClick ? `Hello ${name}` : ''}
</p>
    </div>
  )

}

export default FormBasic;