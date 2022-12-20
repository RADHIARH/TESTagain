var mysql = require("mysql2");
//Database connection
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "node_mysql_crud_db",
});

connection.getConnection(function (error) {
  if (error) console.log(error);
});
module.exports = connection;
