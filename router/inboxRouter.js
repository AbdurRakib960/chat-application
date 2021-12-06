// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");
const decoreateHtmlResponse = require("../middlewares//common/decoraeHtmlResponse");

const router = express.Router();

// login page;
router.get("/", decoreateHtmlResponse("Inbox"), getInbox);

module.exports = router;
