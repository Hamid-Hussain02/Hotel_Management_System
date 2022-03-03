const express = require("express");
// const userMiddleware = require('../middlewares/user')
const router = express.Router();
const roomsController = require("../controllers/room");


const authenticateToken = require('../middlewares/authenticateToken')



router.get("/", roomsController.getAllRooms)


module.exports = router;