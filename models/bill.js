'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill.belongsTo(models.User,{foreignKey:'id'});
      Bill.belongsTo(models.Reservation,{foreignKey:'id'});
      
    }
  }
  Bill.init({
    customer_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  },
    reservation_id:{
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  },
    amount: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:10
    }
  },
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};