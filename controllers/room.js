const roomsModel = require("../models").Room;
const reservationModel = require("../models").Reservation;






 //return all hotel along with rooms and reservation status
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