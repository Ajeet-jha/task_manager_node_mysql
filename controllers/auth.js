const express = require("express");
const router = express.Router();
const connection = require("../Database/dabConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = (req, res) => {
  const { name, email, password } = req.body;
  connection.query(
    "SELECT email from agents where email = ?",
    [email],
    async (error, result) => {
      if (error) {
        console.log(error);
        next();
      } else if (result > 0) {
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            response: "Email alredy taken !!",
          })
        );
        next();
      } else {
        let haspassword = await bcrypt.hash(password, 8);
        console.log(haspassword);
        let insert_obj = {
          name: name,
          email: email,
          password: password,
          hash: haspassword,
        };
        connection.query(
          "INSERT INTO agents SET ?",
          insert_obj,
          (error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log(result);
              res.send(
                JSON.stringify({
                  status: 200,
                  error: null,
                  response: "User Register",
                })
              );
            }
          }
        );

        // res.send(
        //   JSON.stringify({
        //     status: 200,
        //     error: null,
        //     response: "user save !!",
        //   })
        // );
      }
    }
  );
};
