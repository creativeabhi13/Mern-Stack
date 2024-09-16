const express = require('express');
const authRoutes = require('./auth');
const routes = express.Router();

// Auth Routes

routes.use('/auth',authRoutes);

module.exports = routes;