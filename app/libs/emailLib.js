'use strict';

const nodemailer = require('nodemailer');


let sendEmail = (sendEmailOptions) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: '465',
        secure: true,
        auth: {
               user: `${process.env.EMAIL}`,
               pass: `${process.env.PASSWORD}`
           }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `Meeting Planner  ${process.env.EMAIL}`, // sender address
        to: sendEmailOptions.email, // list of receivers
        subject: sendEmailOptions.subject, // Subject line
        text: `Dear ${sendEmailOptions.name},
               Welcome to Meeting planner!.`, // plain text body
        html: `${sendEmailOptions.html}`       
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        else{
            console.log('Message successfully sent.', info);
        }
       
    });

}

module.exports = {
    sendAnEmail: sendEmail
  }
