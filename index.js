// Add packages
const express = require("express");
// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log("Node app is running on port " + port);
});
let router = require("./routes");
app.use("/user", router);
// Export the Express API
// Creating GET Router to fetch all the employes  from the MySQL Database

module.exports = app;
