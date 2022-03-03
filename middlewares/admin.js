const Joi = require('joi');
// const UserModel = require('../models').User;
// const LibraryModel = require('../models').Library;
const usersModel = require("../models").User;


const validateAdmin = async (req, res, next) => {
    try{
        let user =await usersModel.findByPk(req.body.user_id)
        if(user&&user.role == 'admin')  
          next();
        else
          return res.status(400).json({
          success: false,
          msg: 'You do not have permission to perform this action.'})
    } catch(e){
        res.status(500).json({error:e.message})
    }
}



  
module.exports={
    validateAdmin
}