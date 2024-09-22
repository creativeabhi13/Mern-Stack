import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import customResponse from "../utilities/response.js";
import sendMail from "../utilities/sendMail.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import generateToken from "../utilities/generateToken.js";
import sendMail1 from "../utilities/sendMail1.js";
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
         sendMail1({
            to: updatedUser.email,
            subject: "Email verified",
            store_name:"Ecoomerce_Creativeabhi13",
            name: updatedUser.name,
            email: updatedUser.email,
            link: `${process.env.website}/`,
         })

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


  // login controller
  
export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User
        .findOne({ email: email });

        if (!user) {
            return customResponse(res, "Invalid email or password");
            }
            if (!user.emailVerified) {
            return customResponse(res, "Please verify your email");
            }
        const match = await bcrypt.compare(password, user.password);

        if (!match) {   
            return customResponse(res, "Invalid email or password");
        }
        let token = generateToken(user._id);
        user.token = token;
        const updatedUser = await user.save();
        return customResponse(res, "Login successful", updatedUser, 200, true);
    }
    catch (err) {
        return customResponse(res, err.message, null, 500, false);
    }
}

// logout controller
export const logout = async (req, res) => {

    try {
        const user = await User.findOne({ _id: req.user._id });
        if (!user) {
            return customResponse(res, "User not found", null, 404, false);
        }
        user.token = "";
        const updatedUser = await user.save();
        return customResponse(res, "Logout successful", updatedUser, 200, true);
    }
    catch (err) {
        return customResponse(res, err.message, null, 500, false);
    }
}


// forgot password controller

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user
        = await
        User.findOne({ email: email });

        if (!user) {
            return customResponse(res, "User not found", null, 404, false);
        }
        let emailToken = uuidv4();
        user.emailToken = emailToken;
        user.email_sent_at = new Date();
        const updatedUser = await user.save();
        sendMail({
            to: updatedUser.email,
            subject: "Reset your password",
            store_name:"Ecoomerce_Creativeabhi13",
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            link: `${process.env.website}resetPassword/${updatedUser.emailToken}`,
        });
        return customResponse(res, "Reset password link sent to your email", null, 200, true);
    }
    catch (err) {
        return customResponse(res, err.message, null, 500, false);
    }

}

// reset password controller

export const resetPassword = async (req, res) => {
    const { password } = req.body;
    const emailToken = req.params.token;
  
    try {
      const user
        = await
        User.findOne({ emailToken: emailToken });
        if (!user) {
            return customResponse(res, "Invalid token", null, 400, false);
        }
        let hashedPassword = await bcrypt.hash(password, saltRounds);
        user.password = hashedPassword;
        user.emailToken = "";
        const updatedUser = await user.save();
        return customResponse(res, "Password reset successful", updatedUser, 200, true);
    }
    catch (err) {
        return customResponse(res, err.message, null, 500, false);
    }
}

