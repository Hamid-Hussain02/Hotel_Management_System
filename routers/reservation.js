const express = require("express");
const userMiddleware = require('../middlewares/user')
const reservationMiddleware = require('../middlewares/reservation')
const router = express.Router();
const reservationController = require("../controllers/reservation");
// const email = require("../jobs/email");
// const event = require("../events/event");


// const authenticateToken = require('../middlewares/authenticateToken')



router.get("/", reservationController.getReservations);
router.post("/create", [reservationMiddleware.validateReservationCreate],reservationController.createReservation);


module.exports = router;