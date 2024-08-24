import React, { useState } from "react";
import axios from "axios";

const Login = ({setToken}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  

  let { email, password } = user;

  function updateUser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [key]: value });
  }


  console.log(user);
  function implementLogin(e) {
    e.preventDefault();

    //validate the user
    // if(user.name === "" || user.email === "" || user.password === "" || user.confirmPassword === ""){
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    // // check email format
    // let emailFormat = /\S+@\S+\.\S+/;
    // if(!emailFormat.test(user.email)){
    //     alert("Invalid email format");
    //     return;
    // }

    // send the user data to the server
    axios
      .post("https://instagram-express-app.vercel.app/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        {
          console.log(res.data);
          setMessage(res.data.message);
          setToken(res.data.data.token);
            setUser({
                email: "",
                password: "",
            });
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setUser({
            ...user,
            password: "",
           });
      });
  }
  return (
    <div>
      <h1>Login</h1>
      {message && <p>{message}</p>}
      <form onSubmit={implementLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={updateUser}
          name="email"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={updateUser}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
