const express = require("express");
// const userMiddleware = require('../middlewares/user')
const router = express.Router();
const hotelsController = require("../controllers/hotel");


const authenticateToken = require('../middlewares/authenticateToken')



router.get("/", [authenticateToken.verifyToken],hotelsController.getAllHotels)


module.exports = router;