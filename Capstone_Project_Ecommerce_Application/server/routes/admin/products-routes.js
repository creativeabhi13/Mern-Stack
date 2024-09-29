import express from "express";


import {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} from "../../controllers/admin/products-controller.js";

import { upload } from "../../helpers/cloudinary.js";


const admin_products_routes = express.Router();

admin_products_routes.post("/upload-image", upload.single("my_file"), handleImageUpload);
admin_products_routes.post("/add",addProduct);
admin_products_routes.put("/edit/:id",editProduct);
admin_products_routes.delete("/delete/:id", deleteProduct);
admin_products_routes.get("/get", fetchAllProducts);

export default admin_products_routes;
