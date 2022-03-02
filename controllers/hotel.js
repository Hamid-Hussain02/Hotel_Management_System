const hotelsModel = require("../models").Hotel;
const reservationModel = require("../models").Reservation;






 //return all hotel along with rooms and reservation status
const getAllHotels = async (req, res) => {
  try{
  let hotels = await hotelsModel.findAll();
  
  res.status(200).send(hotels);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};


module.exports = {
    getAllHotels
};