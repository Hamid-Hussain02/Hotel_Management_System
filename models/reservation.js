'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User,{foreignKey:'id'});
      Reservation.hasOne(models.Bill,{foreignKey:'reservation_id'});
    }
  }
  Reservation.init({
    user_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  },
    room_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  },
    bill_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  }
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};