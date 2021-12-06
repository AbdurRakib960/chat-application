// external imports
const express = require("express");

// internal imports
const { getLogin } = require("../controller/loginController");
const decoreateHtmlResponse = require("../middlewares//common/decoraeHtmlResponse");

const router = express.Router();

// login page;
router.get("/", decoreateHtmlResponse("Login"), getLogin);

module.exports = router;
