const reservationModel = require("../models").Reservation;






 //return all users with bank account details
 // one to one relation
const getReservations = async (req, res) => {
  try{

    //   let users =await usersModel.findByPk(req.body.id)
  let reservations = await reservationModel.findAll();
  
  res.status(200).send(reservations);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};




  

module.exports = {
    getReservations
};