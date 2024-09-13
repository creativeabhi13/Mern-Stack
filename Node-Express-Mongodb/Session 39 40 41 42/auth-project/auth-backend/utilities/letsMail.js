const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
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

    const mailOptions = {
        from: process.env.EMAIL,
        to: options.to,
        subject: options.subject,
        text: options.text
    };

    try {
        let emailSentInfo = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + emailSentInfo.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};




module.exports = letsMail;