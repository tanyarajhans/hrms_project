const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const dotenv = require("dotenv");
const connection = require("../../config");
dotenv.config();

const router = express.Router();

router.post("/", (req, res) => {
  let { email, password } = req.body;
  key = crypto.pbkdf2Sync(password, "salt", 10, 10, "sha512");
  password = key.toString("hex");
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  
  let sql = `SELECT uid from users where email='${email}' and password='${password}'`;
  connection.query(sql, function(error, result, fields) {
    if (error) {
      return res.json({
        status: false,
        message: error
      });
    }
    console.log(result[0].uid);
    
    if (result[0].uid > 0) {
      //Create and assign  a token
      const token = jwt.sign({ uid: result[0].uid },"hello" );
      res.header("auth-token", token).send(token);
    }
  });
});

module.exports = router;
