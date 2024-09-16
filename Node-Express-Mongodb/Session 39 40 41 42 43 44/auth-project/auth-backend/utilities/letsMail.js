const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

dotenv.config();

console.log(process.env.EMAIL);
console.log(process.env.PASSWORD);

const letsMail = async (options) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        logger: true,   // Enable logger
        debug: true     // Enable debug output
    });

// ejs template

//const templatePath = path.join(__dirname, `../templates/mail1.ejs`);
// const templatePath = path.join(__dirname, `../templates/mail2.ejs`);
const templatePath = path.join(__dirname, `../templates/mail3.html`);

//const htmlTemplate = await ejs.renderFile(templatePath, { name: options.name,otp:options.otp });

let htmlString = fs.readFileSync(templatePath, 'utf8');

htmlString = htmlString.replace(/{{name}}/g, options.name);
htmlString = htmlString.replace(/{{link}}/g, options.link);

// attachment path
let attachmentPath1 = path.join(__dirname, `../static/cover.png`);
let attachmentPath2 = path.join(__dirname, `../static/javascriptNotes.pdf`);

    const mailOptions = {
        from: process.env.EMAIL,
        to: options.to,
        subject: options.subject,
      html:htmlString ,

        attachments: [
            {
                filename: 'cover.png',
                path: attachmentPath1

            }
            ,
            {
                filename: 'javascriptNotes.pdf',
                path: attachmentPath2

            }
        ]
    };

    try {
        let emailSentInfo = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + emailSentInfo.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};




module.exports = letsMail;