import React, { useState } from 'react'
import axios from 'axios';

const Signup = ({setToken}) => {

    const [user, setUser] = useState({
        name: "",
         email: "",
          password: "", 
          confirmPassword: "" 
        });

        const [message, setMessage] = useState("");


    let {name, email, password, confirmPassword} = user;

    function updateUser(e) {
       let key = e.target.name;
         let value = e.target.value;
         setUser({...user, [key]: value});
    }

   
    console.log(user);
    function implementSignup(e) {
        e.preventDefault();
   
      

        //validate the user
        // if(user.name === "" || user.email === "" || user.password === "" || user.confirmPassword === ""){
        if(!name || !email || !password || !confirmPassword){
            alert("All fields are required");
            return;
        }
        if(user.password !== user.confirmPassword){
            alert("Passwords do not match");
            return;
        }

        // // check email format
        // let emailFormat = /\S+@\S+\.\S+/;
        // if(!emailFormat.test(user.email)){
        //     alert("Invalid email format");
        //     return;
        // }

        // send the user data to the server
        axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
          name:name, email:email, password:password }).then((res)=>{
       {
           console.log(res.data);
            setMessage(res.data.message);
            setToken(res.data.data.token);
            setUser({
            
                name: "",
                 email: "",
                  password: "", 
                  confirmPassword: ""
            });
           
       }
          }).catch((err)=>{
            console.log(err.response.data.message);
            setUser({
                ...user,
                password: "",
                 confirmPassword: "",
                
            });
          })

    }
  return (
    <div>
        <h1>Signup Form</h1>
        {
            message && <p>{message}</p>
        }
        <form onSubmit={implementSignup}>
            <input type="text"  placeholder='Enter Name' value={name} onChange={updateUser} name="name" />
            <input type="email"  placeholder='Enter Email' value={email} onChange={updateUser} name="email" />
            <input type="password"  placeholder='Enter Password' value={password} onChange={updateUser} name="password"/>
            <input type="password"  placeholder='Confirm Password' value={confirmPassword} onChange={updateUser} name="confirmPassword"/>
            <button type="submit" >Signup</button>
        </form>
    </div>
  )
}

export default Signup;