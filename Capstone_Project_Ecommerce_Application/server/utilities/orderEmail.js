import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const orderEmail = async (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const templatePath = path.join(__dirname, `../templates/orderEmail.html`);

  // Read and replace placeholders in the email template
  let htmlString = fs.readFileSync(templatePath, "utf8");

  // Replace placeholders with actual values
  htmlString = htmlString.replace(/{{name}}/g, options.name);
  htmlString = htmlString.replace(/{{email}}/g, options.email);
  htmlString = htmlString.replace(/{{order_number}}/g, options.order_number);
  htmlString = htmlString.replace(/{{order_date}}/g, options.order_date);
  htmlString = htmlString.replace(/{{order_total}}/g, options.order_total);
  htmlString = htmlString.replace(/{{store_name}}/g, options.store_name);
  htmlString = htmlString.replace(/{{link}}/g, options.link);

  // Additional dynamic fields
  htmlString = htmlString.replace(/{{userId}}/g, options.userId);
  htmlString = htmlString.replace(/{{cartId}}/g, options.cartId);
  htmlString = htmlString.replace(/{{cartItems}}/g, options.cartItems);
  htmlString = htmlString.replace(/{{addressInfo}}/g, options.addressInfo);
  htmlString = htmlString.replace(/{{orderStatus}}/g, options.orderStatus);
  htmlString = htmlString.replace(/{{paymentMethod}}/g, options.paymentMethod);
  htmlString = htmlString.replace(/{{paymentStatus}}/g, options.paymentStatus);
  htmlString = htmlString.replace(/{{orderUpdateDate}}/g, options.orderUpdateDate);
  htmlString = htmlString.replace(/{{paymentId}}/g, options.paymentId);
  htmlString = htmlString.replace(/{{payerId}}/g, options.payerId);

  // Configure the email options
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: options.to,
    subject: options.subject,
    html: htmlString,
  };

  // Send the email
  try {
    let emailSentInfo = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + emailSentInfo.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

export default orderEmail;
