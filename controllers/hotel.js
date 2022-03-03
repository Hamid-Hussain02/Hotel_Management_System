const hotelsModel = require("../models").Hotel;
const roomsModel = require("../models").Room;






 //return all hotel along with rooms and reservation status
const getAllHotels = async (req, res) => {
  try{
  let hotels = await hotelsModel.findAll({include: [{
    model: roomsModel,
  }]});
  
  res.status(200).send(hotels);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};


module.exports = {
    getAllHotels
};