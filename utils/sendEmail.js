const nodemailer = require("nodemailer");
require('dotenv').config();
// const config = require('../config.json');

const sendEmail = async (email, subject, link) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: 587,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });
    
       await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            html: `<p>Please use the following link for instructions to reset your password:${link}</p>`,
        });

       
       
        console.log("email sent sucessfully");
    } catch (error) {
      
        console.log("email not sent", error);
    }
};

module.exports = sendEmail;
