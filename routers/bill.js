const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const billController = require("../controllers/bill");
// const email = require("../jobs/email");
// const event = require("../events/event");


const authenticateToken = require('../middlewares/authenticateToken');
const bill = require("../models/bill");


/**
 * @swagger
 * components:
 *   schemas:
 *     Bill:
 *       type: object
 *       properties:
 *          id:
 *           type: Integer
 *           description: The auto-generated id of the user
 *          customer_id:
 *           type: Integer
 *           description: Id of the customer for whome room is reserved.
 *          amount:
 *           type: Integer
 *           description: Total amount for the reservatin of the room.
 *       example:
 *         id: 1
 *         customer_id: 1
 *         amount: 10
 */

/**
 * @swagger
 *   tags:
 *      name: Bill
 *      description: Hotel managing API
 */

/**
 * @swagger
 * /api/Bill/:
 *   get:
 *     summary: Returns the list of all the hotels
 *     tags: [Bill]
 *     responses:
 *       200:
 *         description: The bill for the specific reservation/customer.
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Hotel'
 * 
 *     
 */
router.post("/getUserBill", billController.getUserBill);


module.exports = router;