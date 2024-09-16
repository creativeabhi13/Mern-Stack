const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

dotenv.config();
const templatePath = path.join(__dirname, `../templates/mail3.html`);
const sendMail = async (options) => {

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    logger: true, // Enable logger
    debug: true, // Enable debug output
  });



  let htmlString = fs.readFileSync(templatePath, "utf-8");

    htmlString = htmlString.replace("{{name}}", options.name);
    htmlString = htmlString.replace("{{link}}", options.link);

  const mailOptions = {
    from: process.env.EMAIL,
    to: options.to,
    subject: options.subject,
    html: htmlString,
  };

  try {
    let emailSentInfo = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + emailSentInfo.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = sendMail;
