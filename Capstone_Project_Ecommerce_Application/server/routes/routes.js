import express from "express";

import authRoutes from "./auth/auth-routes.js";
import adminProductsRoutes from "./admin/products-routes.js";
import adminOrderRoutes from "./admin/order-routes.js";

import shopProductsRoutes from "./shop/products-routes.js";
import shopCartRoutes from "./shop/cart-routes.js";
import shopAddressRoutes from "./shop/address-routes.js";
import shopOrderRoutes from "./shop/order-routes.js";
import shopSearchRoutes from "./shop/search-routes.js";
import shopReviewRoutes from "./shop/review-routes.js";

import commonFeatureRoutes from "./common/feature-routes.js";
import contactus_routes from "./shop/contact-us-routes.js";
import contactus_admin_routes from "./admin/contact-us-adminroutes.js";

const routes = express.Router();

// Auth routes
routes.use("/auth", authRoutes);

// Admin routes
routes.use("/admin/products", adminProductsRoutes);
routes.use("/admin/orders", adminOrderRoutes);
routes.use("/admin/contactus", contactus_admin_routes);

// Shop routes
routes.use("/shop/products", shopProductsRoutes);
routes.use("/shop/cart", shopCartRoutes);
routes.use("/shop/address", shopAddressRoutes);
routes.use("/shop/order", shopOrderRoutes);
routes.use("/shop/search", shopSearchRoutes);
routes.use("/shop/review", shopReviewRoutes);

// contactus routes
routes.use("/shop/contactus", contactus_routes);

// Common routes
routes.use("/common/feature", commonFeatureRoutes);

export default routes;
