import express from "express";

import { searchProducts } from "../../controllers/shop/search-controller.js";

const search_routes = express.Router();

search_routes.get("/:keyword", searchProducts);

export default search_routes;
