let User = require("../models/userModel");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "node_mysql_crud_db",
});

connection.connect(function (error) {
  if (error) console.log(error);
});
// List of users
exports.userList = function (request, response) {
  connection.query("Select * from employees", function (error, resultSQL) {
    if (!error) response.json(resultSQL);
    else console.log(error);
  });
};
