var mysql = require("mysql2");
//Database connection
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "node_mysql_crud_db",
});

module.exports = connection;
