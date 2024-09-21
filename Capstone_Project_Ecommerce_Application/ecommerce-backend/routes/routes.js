import express from 'express';
import authRoutes from './authRoutes.js';
import cartRoutes from './cartRoutes.js';
import orderRoutes from './orderRoutes.js';


const routes = express.Router();



routes.use('/auth', authRoutes);

routes.use('/cart', cartRoutes);

routes.use('/order', orderRoutes);




export default routes;