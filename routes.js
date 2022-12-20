let express = require("express");
let router = express.Router();

// Import contact controller
var userController = require("./controllers/userController");
router.get("/", (request, response) => response.redirect("/user"));
router.get("/user", userController.userList);

module.exports = router;
