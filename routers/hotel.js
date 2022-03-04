const express = require("express");
// const userMiddleware = require('../middlewares/user')
const router = express.Router();
const hotelsController = require("../controllers/hotel");


const authenticateToken = require('../middlewares/authenticateToken')


/**
 * @swagger
 * components:
 *   schemas:
 *     Hotel:
 *       type: object
 *       properties:
 *          id:
 *           type: Integer
 *           description: The auto-generated id of the user
 *          hotel_name:
 *           type: string
 *           description: The name of the hotel.
 *          no_of_rooms:
 *           type: Integer
 *           description: No of the rooms available in the hotel.
 *       example:
 *         id: 1
 *         hotel_name: Hotel One
 *         no_of_room: 10
 */

/**
 * @swagger
 *   tags:
 *      name: Hotel
 *      description: Hotel managing API
 */

/**
 * @swagger
 * /api/hotel/:
 *   get:
 *     summary: Returns the list of all the hotels
 *     tags: [Hotel]
 *     responses:
 *       200:
 *         description: The list of the hotels along with the rooms available in the hotel and all the reservations.
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Hotel'
 * 
 *     
 */
router.get("/", [authenticateToken.verifyToken],hotelsController.getAllHotels)


module.exports = router;