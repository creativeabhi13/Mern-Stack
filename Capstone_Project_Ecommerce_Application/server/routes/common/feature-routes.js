import express from "express";

import { addFeatureImage, getFeatureImages } from "../../controllers/common/feature-controller.js";

const feature_routes = express.Router();

feature_routes.post("/add", addFeatureImage);
feature_routes.get("/get", getFeatureImages);

export default feature_routes;
