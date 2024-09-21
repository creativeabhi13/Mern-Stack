import axios from 'axios';

// Base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
  withCredentials: true,
});

// User Authentication
export const login = (credentials) => API.post('/auth/login', credentials);
export const register = (credentials) => API.post('/auth/register', credentials);
export const logout = () => API.post('/auth/logout');
export const getProfile = () => API.get('/auth/profile');

// Products & Cart
export const fetchProducts = () => API.get('/products');
export const addToCart = (productId, quantity) => API.post('/cart/add', { productId, quantity });
export const fetchCart = () => API.get('/cart');

// Orders
export const placeOrder = (orderDetails) => API.post('/order/place', orderDetails);

// Fetch User Orders
export const fetchOrders = () => API.get('/order/my-orders');  // Assumes you have this endpoint
