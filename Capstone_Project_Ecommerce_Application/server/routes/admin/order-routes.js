import express from "express";
import {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "../../controllers/admin/order-controller.js";


const admin_order_routes = express.Router();

admin_order_routes.get("/get", getAllOrdersOfAllUsers);
admin_order_routes.get("/details/:id", getOrderDetailsForAdmin);
admin_order_routes.put("/update/:id", updateOrderStatus);

export default admin_order_routes;
