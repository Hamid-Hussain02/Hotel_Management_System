const express = require("express");
// const userMiddleware = require('../middlewares/user')
const router = express.Router();
const roomsController = require("../controllers/room");
const adminMiddleware = require('../middlewares/admin')

const authenticateToken = require('../middlewares/authenticateToken')


/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       properties:
 *          id:
 *           type: Integer
 *           description: The auto-generated id of the room
 *          hotel_id:
 *           type: string
 *           description: Id of the Hotel in which room exists.
 *          customer_id:
 *           type: string
 *           description: Id of the customer for whome room is reserved.
 *          booking_status:
 *           type: boolean
 *           description: Booking status of the room
 *       example:
 *         id: 1
 *         hotel_id: 1
 *         costumer_id: 1
 *         booking_status: true
 */

/**
 * @swagger
 *   tags:
 *      name: Rooms
 *      description: Rooms managing API
 */

/**
 * @swagger
 * /api/room/:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Room'
 */



router.get("/",roomsController.getAllRooms)


module.exports = router;