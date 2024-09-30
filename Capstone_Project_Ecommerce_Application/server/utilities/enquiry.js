import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const enquiry = async (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Update the template path to your acknowledgment email template
  const templatePath = path.join(__dirname, `../templates/enquiry.html`);

  let htmlString = fs.readFileSync(templatePath, "utf8");
  // Replace placeholders in the email template
  htmlString = htmlString.replace(/{{name}}/g, options.name);
  htmlString = htmlString.replace(/{{phone}}/g, options.phone); // Added phone replacement
  htmlString = htmlString.replace(/{{email}}/g, options.email);
  htmlString = htmlString.replace(/{{subject}}/g, options.subject); // Added subject replacement
  htmlString = htmlString.replace(/{{message}}/g, options.message); // Added message replacement
  htmlString = htmlString.replace(/{{store_name}}/g, options.store_name);

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: options.to,
    subject: options.subject || 'Your Query Has Been Received',
    html: htmlString,
  };

  try {
    let emailSentInfo = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + emailSentInfo.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

export default enquiry;
