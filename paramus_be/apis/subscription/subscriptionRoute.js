const express = require("express");
const { subscriptionController } = require("./subscriptionController");

const router = express.Router();

router.post("/subscribe", subscriptionController);

module.exports = router;
