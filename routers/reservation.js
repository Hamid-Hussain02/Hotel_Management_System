const express = require("express");
const userMiddleware = require('../middlewares/user')
const reservationMiddleware = require('../middlewares/reservation')
const adminMiddleware = require('../middlewares/admin')
const router = express.Router();
const reservationController = require("../controllers/reservation");


const authenticateToken = require('../middlewares/authenticateToken')


/**
 * @swagger
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       properties:
 *          id:
 *           type: Integer
 *           description: The auto-generated id of the user
 *          user_id:
 *           type: Integer
 *           description: Id of the user.
 *          room_id:
 *           type: Integer
 *           description: Id of the reserved room.
 *          bill_id:
 *           type: Integer
 *           description: Id of the bill generated for this reservations
 *       example:
 *         id: 1
 *         user_id: 1
 *         room_id: 1
 *         bill_id: 1
 */

/**
 * @swagger
 *   tags:
 *      name: Users
 *      description: Users managing API
 */

/**
 * @swagger
 * /api/reservation/:
 *   get:
 *     summary: Returns the list of all the reservations
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */
router.get("/", reservationController.getReservations);
router.post("/create", [authenticateToken.verifyToken,reservationMiddleware.validateReservationCreate],reservationController.createReservation);
/**
 * @swagger
 * /api/reservation/makeReservation:
 *   post:
 *     summary: Make reservation for the user.
 *     tags: [Reservations]
 *     requestBody:
 *       content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *
 *     responses:
 *       200:
 *         description: The reservation was made.
 *       404:
 *         description: Something went wrong.
 */
router.post("/makeReservation", [authenticateToken.verifyToken],reservationController.makeReservation);
/**
 * @swagger
 * /api/reservation/getUserReservation:
 *   post:
 *     summary: Get reservation for the specific user.
 *     tags: [Reservations]
 *     requestBody:
 *       content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *
 *     responses:
 *       200:
 *         description: The reservation was made.
 *       404:
 *         description: Something went wrong.
 */
router.post("/getUserReservation",reservationController.getUserReservation);


module.exports = router;