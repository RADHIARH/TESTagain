let express = require("express");
let router = express.Router();

// Import contact controller
var userController = require("./controllers/userController");
router.get("/", userController.userList);

module.exports = router;
