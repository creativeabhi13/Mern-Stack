import React, { useState } from "react";
import Signup from "./Components/signup";
import Login from "./Components/login";
import "./App.css";
import Dashboard from "./Components/Dashboard";



const App = () => {

    const [token, setToken] = useState("");
    console.log(token);
  return (
    <>
     <Signup setToken={setToken}/>
        <Login setToken={setToken}/>
        <Dashboard token={token}/>
    </>
   
  )
}

export default App