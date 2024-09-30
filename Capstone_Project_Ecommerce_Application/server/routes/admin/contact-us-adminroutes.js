
import express from 'express';

import { deleteContactUs,fetchAllContactUs } from '../../controllers/shop/contactus-controller.js';



const contactus_admin_routes = express.Router();

contactus_admin_routes.get("/get",fetchAllContactUs);
contactus_admin_routes.delete("/delete/:id", deleteContactUs);


export default contactus_admin_routes;