import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import customResponse from "../utilities/response.js";
import sendMail from "../utilities/sendMail.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import generateToken from "../utilities/generateToken.js";
dotenv.config();

const saltRounds = 13;
const JWT_TOKEN = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return customResponse(res, "User already exists");
    }

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let newUser = new User({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
    });

    let foundUser1 = await User.findOne({ email: email });
    if (foundUser1) {
      return customResponse(res, "User already exists with this email");
    }
    let foundUser2 = await User.findOne({ phone: phone });
    if (foundUser2) {
      return customResponse(res, "User already exists with this phone number");
    }

    let savedUser = await newUser.save();
    if (savedUser != null) {
      // create email token
      let emailToken = uuidv4();
      savedUser.emailToken = emailToken;
      savedUser.email_sent_at = new Date();
      const updatedUser = await savedUser.save();

      if (updatedUser != null) {
        sendMail({
          to: updatedUser.email,
          subject: "Verify your email",
          store_name:"Ecoomerce_Creativeabhi13",
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          link: `${process.env.website}verifyEmail/${updatedUser.emailToken}`,
        });
        return customResponse(
          res,
          "User created successfully",
          null,
          201,
          true
        );
      } else {
        return customResponse(res, "User creation failed");
      }
    }
  } catch (err) {
    return customResponse(res, err.message, null, 500, false);
  }
};

// verify email token and update emailVerified field  & create actual token for user it is a get request

export const verifyEmail = async (req, res) => {
    // Extract token from route parameters
    const emailToken = req.params.token;
  
    if (!emailToken) {
      return customResponse(res, "Invalid token");
    }
  
    try {
      // Find the user by emailToken
      const user = await User.findOne({ emailToken: emailToken });
  
      if (!user) {
        return customResponse(res, "Invalid token");
      }
  
      // Generate a new token for the user
      let token = generateToken(user._id);
  
      // Update user fields
      user.emailToken = ""; // Clear the email token
      user.token = token;   // Set the new token
      user.emailVerified = true;
  
      // Save the updated user
      const updatedUser = await user.save();
  
      if (updatedUser) {
        return customResponse(
          res,
          "Email verified successfully",
          updatedUser,
          200,
          true
        );
      } else {
        return customResponse(res, "Email verification failed");
      }
    } catch (err) {
      return customResponse(res, err.message, null, 500, false);
    }
  };
  

