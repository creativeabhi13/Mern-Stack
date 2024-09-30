import  express     from "express";

import { addContactUs } from "../../controllers/shop/contactus-controller.js";

const contactus_routes = express.Router();

contactus_routes.post("/add", addContactUs);

export default contactus_routes;