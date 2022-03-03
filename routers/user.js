const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const usersController = require("../controllers/user");
// const email = require("../jobs/email");
// const event = require("../events/event");


const authenticateToken = require('../middlewares/authenticateToken')


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 *         - contact
 *       properties:
 *          id:
 *           type: string
 *           description: The auto-generated id of the user
 *          name:
 *           type: string
 *           description: User first name
 *          email:
 *           type: string
 *           description: User email
 *          password:
 *           type: string
 *           description: User password
 *          role:
 *           type: string
 *           description: User role name
 *          contact:
 *           type: string
 *           description: User phone number
 *       example:
 *         name: Rickey
 *         mail: ponting@gmail.com
 *         password: 1234567ABC!
 *         role: Student
 *         contact: +108 763567532
 */

/**
 * @swagger
 *   tags:
 *      name: Users
 *      description: Users managing API
 */

/**
 * @swagger
 * /api/user/:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/",[authenticateToken.verifyToken], usersController.getUsers);
router.post("/login",[userMiddleware.validateUserLogin],usersController.login);
router.post("/create",[authenticateToken.verifyToken,userMiddleware.validateUserCreate],usersController.addUser)
router.post("/update", [userMiddleware.validateUserUpdate],usersController.updateUser);
/**
 * @swagger
 * /api/user/delete:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.post("/delete", [userMiddleware.validateUserDelete],usersController.deleteUser);

// router.post("/sendemail", email.scheduleEmail);
// router.post("/sendEvent", event.registerEvent);


module.exports = router;