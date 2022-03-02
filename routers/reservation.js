const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const reservationController = require("../controllers/reservation");
// const email = require("../jobs/email");
// const event = require("../events/event");


// const authenticateToken = require('../middlewares/authenticateToken')



router.get("/", reservationController.getReservations);


module.exports = router;