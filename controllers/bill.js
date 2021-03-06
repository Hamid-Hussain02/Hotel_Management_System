const billModel = require("../models").Bill;



/*
     This controller is responsible for generating 
     bill for a particular reservation.
*/
const generateBill = async (req, res) => {
    try{
        const {user_id,reservation_id}=req.body
    let bill = new billModel({user_id,reservation_id,});
    await bill.save();
    res.status(201).send(bill);
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };


  /*
     This controller is responsible for getting
     bills of a specific user.
*/
  const getUserBill = async (req, res) => {
    try{
    let bill = await billModel.findOne({
        where: {
          customer_id: req.body.user_id
        }});
    res.status(200).send(bill);
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };


module.exports = {
    generateBill,
    getUserBill
};