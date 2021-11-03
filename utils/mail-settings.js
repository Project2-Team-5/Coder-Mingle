// If there's an error this will log the error in the errorlog.json file and send an e-mail alerting us of the error.

const fs = require("fs")
require('dotenv').config()
const nodemailer = require("nodemailer")
const errors = require("./errorlog.json")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
});

let mailOptions = {
    from: "codermingle@gmail.com",
    to: "Lemelisk27@gmail.com",
    subject: 'Error on the Site!',
    text: 'There was an error on the website!'
};

const sendError = (sendErr) => {
  transporter.sendMail(mailOptions, function(err,data) {
      if (err) {
        console.log("Error: " + err)
      }
      else {
        console.log("Email Sent")
        const errObj = {
          date:Date.now(),
          error:sendErr
        }
        errors.push(errObj)
        fs.writeFile("./utils/errorlog.json",JSON.stringify(errors,null,4),
        function (err) {
          if (err) {
              console.log("Error: " + err)
          }
          })
      }
  })
}

module.exports = sendError