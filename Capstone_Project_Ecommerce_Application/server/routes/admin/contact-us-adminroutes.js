
import express from 'express';


import { deleteContactUs, fetchAllContactUs, fetchContactUsById, updateContactUs } from '../../controllers/admin/contact_us_admin_controller.js';



const contactus_admin_routes = express.Router();

contactus_admin_routes.get("/:id",fetchContactUsById);

contactus_admin_routes.delete("/:id", deleteContactUs);

contactus_admin_routes.get("/",fetchAllContactUs);

contactus_admin_routes.put("/:id",updateContactUs);


export default contactus_admin_routes;