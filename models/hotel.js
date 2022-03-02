'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotel.init({
    hotel_name: {
      type:DataTypes.STRING,
    validate:{
      len:[2-40]
    }},
    no_of_rooms: {
      type:DataTypes.INTEGER,
    validate:{
      allowNull:true  
    }
  }
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};