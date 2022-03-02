const reservationModel = require("../models").Reservation;


 //return all reservations
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

const createReservation = async (req, res) => {
    try{
        const {user_id,room_id,bill_id}=req.body
    let reservation = new reservationModel({user_id,room_id,bill_id});
    await reservation.save();
    res.status(201).send(reservation);
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };




  

module.exports = {
    getReservations,
    createReservation
};