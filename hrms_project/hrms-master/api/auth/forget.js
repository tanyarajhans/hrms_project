const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
var connection = require('../../config');

router.post("/", (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.json("email required");
  }
  let sql = 'SELECT email FROM users WHERE email="' + email + '"';
  let query = connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (!result[0]) {
      return res.status(400).json({ msg: "Email does not exist" });
    }
    const token = crypto.randomBytes(20).toString("hex");
    const expires = Date.now() + 360000;
    let updateResetPassword = `UPDATE users SET resetPasswordToken='${token}',	resetPasswordExpires='${expires}' WHERE email='${email}'`;

    let updatequery = connection.query(updateResetPassword, (err, result) => {
      if (err) {
        return console.log(err);
      }
      // console.log(result);
      res.send("Update reset password");
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "listendev22@gmail.com",
        pass: "Powerful321"
      }
    });

    const mailOptions = {
      from: "email",
      to: email,
      subject: "Link To Reset Password",
      text: `You requested for reset password http://localhost:5000/api/reset/${token}`
    };
    console.log("sending mail");

    transporter.sendMail(mailOptions, function(err, response) {
      if (err) {
        console.log("There was an error", err);
      } else {
        console.log("here is the response", response);
        res.status(200).json("recovery email sent");
      }
    });
  });
});

module.exports = router;
