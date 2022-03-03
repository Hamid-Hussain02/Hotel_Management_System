const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const billController = require("../controllers/bill");
// const email = require("../jobs/email");
// const event = require("../events/event");


const authenticateToken = require('../middlewares/authenticateToken');
const bill = require("../models/bill");



router.post("/getUserBill", billController.getUserBill);


module.exports = router;