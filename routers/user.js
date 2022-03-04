const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const usersController = require("../controllers/user");
const authenticateToken = require('../middlewares/authenticateToken')
const adminMiddleware = require('../middlewares/admin')


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
 *           type: Integer
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
 *         email: ponting@gmail.com
 *         password: 123456
 *         role: user
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
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/",[authenticateToken.verifyToken,adminMiddleware.validateAdmin], usersController.getUsers);
/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     requestBody:
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  
 *     responses:
 *       200:
 *         description: The user was deleted
 *       400:
 *         description: The user was not found
 */
router.post("/login",[userMiddleware.validateUserLogin],usersController.login);
/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     requestBody:
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  
 *     responses:
 *       200:
 *         description: The user was deleted
 *       400:
 *         description: The user was not found
 */
router.post("/create",[authenticateToken.verifyToken,userMiddleware.validateUserCreate,adminMiddleware.validateAdmin],usersController.addUser)
/**
 * @swagger
 * /api/user/update:
 *   patch:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     requestBody:
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  
 *     responses:
 *       200:
 *         description: The user was deleted
 *       400:
 *         description: The user was not found
 */
router.patch("/update", [userMiddleware.validateUserUpdate,adminMiddleware.validateAdmin],usersController.updateUser);
/**
 * @swagger
 * /api/user/delete:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     requestBody:
 *       content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.delete("/delete", usersController.deleteUser);



module.exports = router;