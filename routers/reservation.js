const express = require("express");
const userMiddleware = require('../middlewares/user')
const reservationMiddleware = require('../middlewares/reservation')
const adminMiddleware = require('../middlewares/admin')
const router = express.Router();
const reservationController = require("../controllers/reservation");
// const email = require("../jobs/email");
// const event = require("../events/event");


const authenticateToken = require('../middlewares/authenticateToken')



router.get("/", reservationController.getReservations);
router.post("/create", [authenticateToken.verifyToken,reservationMiddleware.validateReservationCreate],reservationController.createReservation);
router.post("/makeReservation", [authenticateToken.verifyToken],reservationController.makeReservation);
router.post("/getUserReservation",reservationController.getUserReservation);


module.exports = router;