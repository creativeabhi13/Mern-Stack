import express from "express";

import {
  addProductReview,
  getProductReviews,
} from "../../controllers/shop/product-review-controller.js";

const review_routes = express.Router();

review_routes.post("/add", addProductReview);
review_routes.get("/:productId", getProductReviews);

export default review_routes;
