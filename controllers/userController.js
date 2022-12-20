let User = require("../models/userModel");
var mysql = require("mysql2");
//Database connection
const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "node_mysql_crud_db",
});

// List of users
exports.userList = function (request, response) {
  connection.query("Select * from employees", function (error, resultSQL) {
    if (!error) response.json(resultSQL);
    else console.log(error);
  });
};
