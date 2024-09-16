const express = require("express");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

const {
  v4: uuidv4
} = require("uuid");
const isLoggedIn = require("../middleware/isloggedIn.js");

const sendMail = require("../utilities/sendMail.js");

const dotenv = require("dotenv");
dotenv.config();

let url = process.env.website;

const authRoutes = express.Router();
const saltRounds = 13;

authRoutes.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

  // Check if all fields are filled
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await User.findOne({
    email: email,
  });
  if (user) {
    return res.status(400).json({
      message: "User Already register with this email",
    });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  if (hashedPassword == null) {
    return res.status(400).json({
      message: "Error hashing password",
    });
  }
  let newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });
  try {
    let savedUser = await newUser.save();
    if (savedUser != null) {

      // Send email verification
      savedUser.emailToken = uuidv4();
      let updatedUser = await savedUser.save();

      if (updatedUser == null) {
        return res.status(400).json({
          message: "Error saving email token"
        });
      } else {

        // send email
        sendMail({
          to: updatedUser.email,
          subject: "Email Verification",
          name: updatedUser.name,
          link: `${url}/verifyEmail/${updatedUser.emailToken}`,
        });

        return res.json({
          message: "User created successfully and email sent",
          user: updatedUser,
          success: true
        });
      }

    }
    res.json({
      message: "Error creating user",
      err,
    });

  } catch (err) {
    console.log(err);
    res.json({
      message: "Error creating user",
      err,
    });
  }
});



authRoutes.get("/verifyEmail/:emailToken", async (req, res) => {

  let emailToken = req.params.emailToken;

  if(!emailToken){
      return res.json({message: "Invalid token"});
  }
  

  try{
      let foundUser = await User.findOne({emailToken: emailToken});
      if(foundUser == null){
          return res.json({message: "Invalid token"});
      }
      else{
            let token = uuidv4();

            foundUser.emailToken = "";
           foundUser.emailVerified = true;
           foundUser.token = token;

         let updatedUser = await foundUser.save();

            if(updatedUser == null){
              return res.json({message: "Error saving user"});
            }
            else{
              return res.json({message: "Email verified successfully", user: updatedUser});
            }
      }
      
  }
  catch(err){
      console.log("Error verifying email", err);
  }


})


authRoutes.post("/login", async (req, res) => {
  const {
    email,
    password
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await User.findOne({
    email: email,
  });
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  try {
    let foundUser = await User.findOne({
      email: email
    });
    const isSame = await bcrypt.compare(password, foundUser.password);
    if (isSame) {
      foundUser.token = uuidv4();
      let updatedUser = await foundUser.save();
      if (updatedUser) {
        return res.json({
          message: "User logged in successfully",
          user: updatedUser,
          success: true,
        });
      } else {
        return res.status(400).json({
          message: "Error saving token",
        });
      }
    } else {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: "Error creating user",
      err,
    });

  }
});



module.exports = authRoutes;