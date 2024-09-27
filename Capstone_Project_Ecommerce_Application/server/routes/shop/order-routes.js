import express from "express";

import {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
} from "../../controllers/shop/order-controller.js";

const order_routes = express.Router();

order_routes.post("/create", createOrder);
order_routes.post("/capture", capturePayment);
order_routes.get("/list/:userId", getAllOrdersByUser);
order_routes.get("/details/:id", getOrderDetails);

export default order_routes;
