var mysql = require("mysql2");
//Database connection
var pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  password: "",
  database: "todoapp",
});
pool.getConnection(function (err, connection) {
  connection.release();
});
module.exports = connection;
