import express from 'express';
import { placeOrder } from '../controllers/orderController.js';

const orderRoutes = express.Router();

orderRoutes.post('/place', placeOrder);

export default orderRoutes;
