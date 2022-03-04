const usersModel = require("../models").User;
const reservationModel = require("../models").Reservation;
const billModel = require("../models").Bill;
const emailJob = require("../jobs/email");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


 /*
     This controller is responsible for returning
     all the users.
*/
const getUsers = async (req, res) => {
  try{
  let users = await usersModel.findAll({include: [{
    model: reservationModel,
    include:[billModel]

  }]});
  
  res.status(200).send(users);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};

/*
     This controller is responsible for creating
     new user in the database.
*/
const addUser = async (req, res) => {
    try{
        const {name,email,password,contact,role}=req.body
    let userSave = new usersModel({name,email,password,contact,role,
        createAt:Date.now(),updatedAt:Date.now()});
    await userSave.save();
    emailJob.sendEmail(req.body)
    res.status(201).send(userSave);
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

  /*
     This controller is responsible for log in
     user.
*/
 const login=async(req,res)=>{
    try{
        email = req.body.email;
        const user = await usersModel.findOne({    
          include: [{
            model: usersModel,
            as: 'user',
          }],
          where: {email}
         });
      if (user && await(bcrypt.compareSync(req.body.password, user.password))) {  
            const token = jwt.sign(   
              { id: user.id, email },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            );
            user.token = token;   
            user.update({
              token: token
            });    
            res.status(200).json({"user":user});
      }
      else
          res.status(400).send("Invalid Credentials");
    } catch(e){
        res.status(500).json({error:e.message})
      }
}

/*
     This controller is responsible for making
     making reservation for the specific user.
*/
const makeReservation = async (req, res) => {
    try{
     let user =await usersModel.findByPk(req.body.id)
       let reservation = await Reservation.findByPk(req.body.reservation_id)
  const {user_id,room_id,bill_id}=req.body
  reservationModel.create(user_id,room_id,bill_id)
  console.log(user,reservation)
    
    res.status(200).send("user added in team successfully");
    } 
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

  /*
     This controller is responsible for updating
     user information.
*/
  const updateUser = async (req, res) => {
    try{
        let object={}
        if(req.body.name)  object.name = req.body.name;
        if(req.body.email)  object.email = req.body.email;
        if(req.body.password)  object.password = req.body.password;
        usersModel.update(object,{
          where: {
            id: req.body.id
          }});
    res.status(200).send("User updated successfully");
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

  /*
     This controller is responsible for removing
     user from database.
*/
  const deleteUser = async (req, res) => {
    try{
        usersModel.destroy({
          where: {
            id: req.body.user_id
          }});
    res.status(200).send("User deleted Successfully");
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };
  

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    login,
    makeReservation
};