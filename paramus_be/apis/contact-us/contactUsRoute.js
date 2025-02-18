const express = require("express");
const { contactUsController
   
} = require("./contactUsController");

const router = express.Router();

router.post('/contact-us', contactUsController);

module.exports = router;
