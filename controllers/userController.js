let User = require("../models/userModel");
let connection = require("../db");
let userList = [];

// List of users
exports.userList = function (request, response) {
  connection.query("Select * from employees", function (error, resultSQL) {
    if (!error) response.send(resultSQL);
    else console.log(error);
  });
};
