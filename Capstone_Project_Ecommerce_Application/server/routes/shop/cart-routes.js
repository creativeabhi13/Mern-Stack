import express from "express";

import {
  addToCart,
  fetchCartItems,
  deleteCartItem,
  updateCartItemQty,
} from "../../controllers/shop/cart-controller.js";

const cart_routes = express.Router();

cart_routes.post("/add", addToCart);
cart_routes.get("/get/:userId", fetchCartItems);
cart_routes.put("/update-cart", updateCartItemQty);
cart_routes.delete("/:userId/:productId", deleteCartItem);

export default cart_routes;
