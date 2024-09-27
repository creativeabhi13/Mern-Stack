import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
} from "../../controllers/auth/auth-controller.js";


const auth_routes = express.Router();

auth_routes.post("/register", registerUser);
auth_routes.post("/login", loginUser);
auth_routes.post("/logout", logoutUser);
auth_routes.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

export default auth_routes;
