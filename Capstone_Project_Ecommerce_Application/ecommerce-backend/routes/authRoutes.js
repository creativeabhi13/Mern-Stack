import express from 'express';
import { signup, verifyEmail } from '../controllers/authControllers.js';

const authRoutes = express.Router();

authRoutes.post('/signup',signup);

authRoutes.get('/verifyEmail/:token',verifyEmail);


export default authRoutes;