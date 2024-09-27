import express from "express";

import { addAddress, fetchAllAddress, deleteAddress, editAddress } from "../../controllers/shop/address-controller.js";

const address_routes = express.Router();

address_routes.post("/add", addAddress);
address_routes.get("/get/:userId", fetchAllAddress);
address_routes.delete("/delete/:userId/:addressId", deleteAddress);
address_routes.put("/update/:userId/:addressId", editAddress);

export default address_routes;