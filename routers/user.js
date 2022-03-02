const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const usersController = require("../controllers/user");
// const email = require("../jobs/email");
// const event = require("../events/event");


const authenticateToken = require('../middlewares/authenticateToken')



router.get("/",[authenticateToken.verifyToken], usersController.getUsers);
router.post("/login",[userMiddleware.validateUserLogin],usersController.login);
router.post("/create",[authenticateToken.verifyToken,userMiddleware.validateUserCreate],usersController.addUser)
router.post("/update", [userMiddleware.validateUserUpdate],usersController.updateUser);
router.post("/delete", [userMiddleware.validateUserDelete],usersController.deleteUser);
// router.post("/sendemail", email.scheduleEmail);
// router.post("/sendEvent", event.registerEvent);


module.exports = router;