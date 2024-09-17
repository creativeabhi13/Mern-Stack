import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    token: {
      type: String,
    },

    emailToken: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    email_sent_at: {
      type: Date,
    },
    otp: {
      type: String,
    },
    otp_sent_at: {
      type: Date,
    },
    otp_verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
