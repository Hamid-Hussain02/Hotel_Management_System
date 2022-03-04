const roomsModel = require("../models").Room;
const reservationModel = require("../models").Reservation;






 /*
     This controller is responsible for returning all the 
     available rooms along with their booking status
*/
const getAllRooms = async (req, res) => {
  try{
  let rooms = await roomsModel.findAll();
  
  res.status(200).send(rooms);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};


module.exports = {
    getAllRooms
};