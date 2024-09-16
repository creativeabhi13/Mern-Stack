// const express = require("express");
// const User = require("../models/user.js");
// const bcrypt = require("bcrypt");

// const { v4: uuidv4 } = require("uuid");
// const isLoggedIn = require("../middleware/isloggedIn.js");

// const letsMail = require("../utilities/letsMail.js");

// const authRoutes = express.Router();
// const saltRounds = 13;

// authRoutes.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   // Check if all fields are filled
//   if (!name || !email || !password) {
//     return res.status(400).json({
//       message: "All fields are required",
//     });
//   }

//   const user = await User.findOne({
//     email: email,
//   });
//   if (user) {
//     return res.status(400).json({
//       message: "User Already register with this email",
//     });
//   }

//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   if (hashedPassword == null) {
//     return res.status(400).json({
//       message: "Error hashing password",
//     });
//   }
//   let newUser = new User({
//     name: name,
//     email: email,
//     password: hashedPassword,
//   });
//   try {
//     let savedUser = await newUser.save();
//     if (savedUser == null) {
//       return res.status(400).json({
//         message: "Error in Saving User",
//       });
//     } else {

//       letsMail({
//         name: name,
//         subject: `Welcome ${name} to Our Website Creativeabhi13`,
//         to: email,
//        link:"https://www.google.com/",
//     });
//       savedUser.token = uuidv4();
//       let updateUser = await savedUser.save();
//       if (updateUser == null) {
//         return res.status(400).json({
//           message: "Error saving token",
//         });
//       } else {
//         return res.json({
//           message: "User created successfully",
//           user: updateUser,
//           success: true,
//         });
//       }
//     }
//   } catch (err) {
//     console.log(err);
//     res.json({
//       message: "Error creating user",
//       err,
//     });
//   }
// });

// authRoutes.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       message: "All fields are required",
//     });
//   }

//   const user = await User.findOne({
//     email: email,
//   });
//   if (!user) {
//     return res.status(400).json({
//       message: "User not found",
//     });
//   }

//   try {
//     let foundUser = await User.findOne({ email: email });
//     const isSame = await bcrypt.compare(password, foundUser.password);
//     if (isSame) {
//       foundUser.token = uuidv4();
//       let updatedUser = await foundUser.save();
//       if (updatedUser) {
//         return res.json({
//           message: "User logged in successfully",
//           user: updatedUser,
//           success: true,
//         });
//       }
//       else {
//         return res.status(400).json({
//           message: "Error saving token",
//         });
//       }
//     }
//     else {
//       return res.status(400).json({
//         message: "Invalid credentials",
//       });
//     }
//   }

//   catch (err) {
//     console.log(err);
//     res.json({
//       message: "Error creating user",
//       err,
//     });

//   }
// });



// module.exports = authRoutes;
