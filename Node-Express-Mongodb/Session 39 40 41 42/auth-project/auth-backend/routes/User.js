// const express = require("express");
// const User = require("../models/user.js");
// const { v4: uuidv4 } = require("uuid");
// const isLoggedIn = require("../middleware/isloggedIn.js");

// const authRoutes = express.Router();

// authRoutes.post("/signup", (req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }
//   if (password.length < 6) {
//     return res
//       .status(400)
//       .json({ message: "Password must be at least 6 characters long" });
//   }

//   if (password.length > 15) {
//     return res
//       .status(400)
//       .json({ message: "Password must be at most 15 characters long" });
//   }

//   if (name.length < 4) {
//     return res
//       .status(400)
//       .json({ message: "Name must be at least 6 characters long" });
//   }
//   if (name.length > 15) {
//     return res
//       .status(400)
//       .json({ message: "Name must be at most 15 characters long" });
//   }
//   const user = User.findOne({ email: email });
//     if (user) {
//       return res.status(400).json({ message: "User Already register with this email" });
//     }
//   const newUser = new User({
//     name: name,
//     email: email,
//     password: password,
//   });

//   newUser.save().then((user) => {
//     user.token = uuidv4();
//     user
//       .save()
//       .then((user) => {
//         res.json({
//           message: "User created  successfully",
//           user: user,
//           success: true,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json("Error creating user",err);
//       })
//   }).catch((err) => {
//     console.log(err);
//     res.json("Error creating user",err);
//   });
// });

// authRoutes.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }
//   if (password.length < 6) {
//     return res
//       .status(400)
//       .json({ message: "Password must be at least 6 characters long" });
//   }
//   if (password.length > 15) {
//     return res
//       .status(400)
//       .json({ message: "Password must be at most 15 characters long" });
//   }
// User.findOne({ email: email }).then((user) => {
//     if (!user) {
//       return res.status(400).json({ message: "User does not exist" });
//     }
//     if (user.password !== password) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }
//     user.token = uuidv4();
//     user
//       .save()
//       .then((user) => {
//         res.json({
//           message: "User logged in successfully",
//           user: user,
//           success: true,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json("Error logging in user");
//       });
//   });
// });

// authRoutes.get("/secret1", (req, res) => {
//   res.json({ message: "You are authenticated 1" });
// });

// authRoutes.get("/secret2", isLoggedIn, (req, res) => {
//   res.json({ message: "You are authenticated 2", user: req.user });
// });

// module.exports = authRoutes;
