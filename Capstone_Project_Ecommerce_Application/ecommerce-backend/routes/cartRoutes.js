import express from 'express';
import { addToCart, getCart, updateCartItem, removeCartItem } from '../controllers/cartController.js';
import Cart from '../models/cart.js';

const cartRoutes = express.Router();

cartRoutes.post('/add', addToCart);
cartRoutes.get('/', getCart);
cartRoutes.put('/update', updateCartItem);
cartRoutes.delete('/remove', removeCartItem);

export default cartRoutes;
