const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const dotenv = require("dotenv");
const db = require("../../config");

dotenv.config();

const router = express.Router();

router.get("/:token", (req, res) => {
  let sql = `SELECT email FROM users WHERE resetPasswordToken='${
    req.params.token
  }'`;
  console.log(sql);
  let query = db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    }
    if (!result[0]) {
      return res.status(400).json({ msg: "Token is not valid" });
    } else {
      res.status(200).send({
        email: result[0].email,
        message: "OK"
      });
    }
  });
});

module.exports = router;
