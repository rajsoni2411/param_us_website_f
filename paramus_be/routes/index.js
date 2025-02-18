var express = require("express");
var router = express.Router();
const contactUsRouter = require("../apis/contact-us/contactUsRoute");
const subscriptionRouter = require("../apis/subscription/subscriptionRoute");



router.use("/contact", contactUsRouter)

router.use("/subscription", subscriptionRouter)


module.exports = router;
