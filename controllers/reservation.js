const reservationModel = require("../models").Reservation;
const billModel = require("../models").Bill;


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


  const makeReservation = async (req, res) => {
    try{

  const {user_id,room_id,bill_id}=req.body
  console.log(user_id,room_id,bill_id)


  let reservation = new reservationModel({user_id,room_id,bill_id});
  const amount=10

    await reservation.save();
    console.log(reservation)
    let bill=new billModel({customer_id:user_id,reservation_id:reservation.id,amount})
    await bill.save()
    res.status(200).send(reservation);
    } 
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

  const getUserReservation = async (req, res) => {
    try{

  const {user_id,room_id,bill_id}=req.body
  console.log(user_id,room_id,bill_id)


  let reservation = await reservationModel.findOne({where:{
      user_id:req.body.user_id}
      ,include: {
        model: billModel,
      }
  })
    res.status(200).send(reservation);
    } 
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };




  

module.exports = {
    getReservations,
    createReservation,
    makeReservation,
    getUserReservation
};