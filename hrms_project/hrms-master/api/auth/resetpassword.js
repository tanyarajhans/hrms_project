const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const dotenv = require("dotenv");
const connection = require("../../config");

dotenv.config();

const router = express.Router();

router.put("/", (req, res) => {
  const { email, password, confirm } = req.body;
  if (password !== confirm) {
    return res.status(400).json({
      success: false,
      msg: "Password do not match"
    });
  }
  const key = crypto.pbkdf2Sync(password, "salt", 10, 10, "sha512");
  newpassword = key.toString("hex");
  let sql = `Update users SET password='${newpassword}' WHERE email='${email}'`;
  let query = connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send("Password Updated");
  });
});

module.exports = router;
