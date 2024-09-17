const express = require("express");
const User = require("../models/user.js");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

const sendMail = require("../utilities/sendMail.js");
const { v4: uuidv4 } = require("uuid");

const customResponse = require("../utilities/response.js");
const generateOtp = require("../utilities/generateOtp.js");
const sendSms = require("../utilities/sendSms.js");
const saltRounds = 13;

dotenv.config();

const url = process.env.website;

const authRoutes = express.Router();

authRoutes.post("/signup", async (req, res) => {
  let { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return customResponse(res, "All fields are required");
  }
  // chek if name is greater than 6 characters and less than 255 characters
  if (name.length < 6 || name.length > 255) {
    return customResponse(
      res,
      "Name must be greater than 6 characters and less than 255 characters"
    );
  }
  // check if password is greater than 6 characters and less than 1024 characters
  if (password.length < 6 || password.length > 1024) {
    return customResponse(
      res,
      "Password must be greater than 6 characters and less than 1024 characters"
    );
  }
  //check if password has one uppercase, one lowercase, one number and one special character
  let upperCase = new RegExp("[A-Z]");
  let lowerCase = new RegExp("[a-z]");
  let numbers = new RegExp("[0-9]");
  let specialChars = new RegExp('[!@#$%^&*(),.?":{}|<>]');
  if (
    !upperCase.test(password) ||
    !lowerCase.test(password) ||
    !numbers.test(password) ||
    !specialChars.test(password)
  ) {
    return customResponse(
      res,
      "Password must have one uppercase, one lowercase, one number and one special character"
    );
  }
  // check if email is valid
  if (!email.includes("@") || !email.includes(".")) {
    return customResponse(res, "Invalid email");
  }
  // check if phone is valid
  if (phone.length != 13) {
    return customResponse(res, "Invalid phone number");
  }

  // check if user already exists

  try {
    let user = await User.findOne({ email: email });
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
      return customResponse(res, "User already exists");
    }
    let foundUser2 = await User.findOne({ phone: phone });
    if (foundUser2) {
      return customResponse(res, "User already exists");
    }

    let savedUser = await newUser.save();
    if (savedUser != null) {
      let otp = generateOtp();

      // send OTP to user via SMS and Email verification mail
      let emailToken = uuidv4();
      savedUser.emailToken = emailToken;
      savedUser.email_sent_at = new Date();
      savedUser.otp = otp;
      savedUser.otp_sent_at = new Date();
      const updatedUser = await savedUser.save();

      // send Email verification mail
      sendMail({
        to: savedUser.email,
        subject: `Welcome to our website,
        Hey,${updatedUser.name} , Please verify your email`,
        name: updatedUser.name,
        link: `${url}/verifyEmail/${updatedUser.emailToken}`,
      });

      sendSms(`Your Otp is ${updatedUser.otp}`, updatedUser.phone);
      return customResponse(
        res,
        "User registered successfully",
        updatedUser,
        201,
        true
      );
    }
  } catch (err) {
    return customResponse(res, err);
  }
});

module.exports = authRoutes;
