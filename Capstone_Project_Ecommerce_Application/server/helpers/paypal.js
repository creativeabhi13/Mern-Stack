import paypal from "paypal-rest-sdk";
import dotenv from "dotenv";

dotenv.config();

paypal.configure({
  mode: "sandbox",
  client_id: process.env.client_id,
  client_secret: process.env.client_secret,
});

export default paypal;