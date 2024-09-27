import express from "express";

import { getFilteredProducts, getProductDetails } from "../../controllers/shop/products-controller.js";


const product_routes = express.Router();

product_routes.get("/get", getFilteredProducts);
product_routes.get("/get/:id", getProductDetails);

export default product_routes;
