const Joi = require('joi');

const validateReservationCreate = (req, res, next) => {
    try{
        const schema = Joi.object().keys({
          user_id: Joi.Integer().min(1).max(10).required(),
          room_id: Joi.Integer().required(),
          bill_id: Joi.Integer().required(),
        });
        const result = schema.validate(req.body); 
        if(result.error == null)  //means valid
          next();
        else
          return res.status(400).json({
          success: false,
          msg: result.error.details.map(i => i.message).join(',')})
    } catch(e){
        res.status(500).json({error:e.message})
    }
}

module.exports={
    validateReservationCreate
}