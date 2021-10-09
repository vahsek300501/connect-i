const express = require("express");
const router = express.Router();
const profileController = require("../controllers/user_controller");

router.get("/profile",profileController.profile);

module.exports = router;