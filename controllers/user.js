const usersModel = require("../models").User;
const reservationModel = require("../models").Reservation;

const jwt = require('jsonwebtoken')





 //return all users with bank account details
 // one to one relation
const getUsers = async (req, res) => {
  try{
    //   let users =await usersModel.findByPk(req.body.id)
  let users = await usersModel.findAll({include: [{
    model: reservationModel,
  }]});
// console.log(users)
  
  res.status(200).send(users);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};


const addUser = async (req, res) => {
    try{
        console.log("req",req.body)
        const {name,email,password,contact,role}=req.body
    let userSave = new usersModel({name,email,password,contact,role,
        createAt:Date.now(),updatedAt:Date.now()});
    await userSave.save();
    res.status(201).send(userSave);
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

 const login=async(req,res)=>{
    jwt.sign({},'secretKey',(err,token)=>{
        res.json({token:token})
    })
}

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
    // await userSave.save();
    res.status(200).send("User updated successfully");
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

  const deleteUser = async (req, res) => {
    try{
        // console.log(object);
        usersModel.destroy({
          where: {
            id: req.body.id
          }});
    // await userSave.save();
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
    login
};