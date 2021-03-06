'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Hotel, { foreignKey: 'id' })
      this.belongsTo(models.User, { foreignKey: 'id' })
    }
  }
  Room.init({
    hotel_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  },
    customer_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  },
    booking_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};