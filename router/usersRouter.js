// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");
const decoreateHtmlResponse = require("../middlewares//common/decoraeHtmlResponse");

const router = express.Router();

// login page;
router.get("/", decoreateHtmlResponse("Users"), getUsers);

module.exports = router;
