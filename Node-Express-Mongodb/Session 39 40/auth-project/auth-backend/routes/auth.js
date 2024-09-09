const express = require("express");
const User = require("../models/user.js");
const { v4: uuidv4 } = require('uuid');


const authRoutes = express.Router();


function customMiddleware(req, res, next) {
    console.log("Middleware executed");
    next();
}


authRoutes.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  if (password.length > 15) {
    return res
      .status(400)
      .json({ message: "Password must be at most 15 characters long" });
  }

  if (name.length < 4) {
    return res
      .status(400)
      .json({ message: "Name must be at least 6 characters long" });
  }
  if (name.length > 15) {
    return res
      .status(400)
      .json({ message: "Name must be at most 15 characters long" });
  }

  const newUser = new User({
    name: name,
    email: email,
    password: password,
  });

  newUser
    .save()
    .then((user) => {
      res.json({
        message: "User created successfully",
        user: user,
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json("Error creating user");
    });
});


authRoutes.post("/login", (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    if(password.length < 6){
        return res.status(400).json({message: "Password must be at least 6 characters long"});
    }
    if(password.length > 15){
        return res.status(400).json({message: "Password must be at most 15 characters long"});
    }
const user = User.findOne({email:email })
.then(user => {
    if(!user){
        return res.status(400).json({message: "User does not exist"});
    }
    if(user.password !== password){
        return res.status(400).json({message: "Invalid credentials"});
    }
    user.tokens = user.tokens.concat({token: uuidv4()});
    user.save()
    .then(user => {
        res.json({message: "User logged in successfully", user: user, success: true});
    }
    ).catch(err => {
        console.log(err);
        res.json("Error logging in user");
    });

}
)
}
);


authRoutes.get("/secret1",customMiddleware, (req, res) => {
    res.json({message: "You are authenticated 1"});
});

authRoutes.get("/secret2", (req, res) => {
    const tokens = req.headers.authorization.split(" ");
    if(!tokens== null){
        return res.status(400).json({message: "No token provided"});
    }

   User.findOne({tokens: tokens[1]})
    .then(user => {
         if(!user){
              return res.status(400).json({message: "User not found"});
         }
         res.json({message: "You are authenticated 2", user:user}).
            catch(err => {
                console.log(err);
                res.json("Error authenticating user");
            });
    }
    );
       
});


module.exports = authRoutes;
