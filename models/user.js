const bcrypt = require('bcrypt');


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Reservation, { foreignKey: 'user_id' })
      this.hasOne(models.Room, { foreignKey: 'customer_id' })
      this.hasOne(models.Bill, { foreignKey: 'customer_id' })
    }
  }
  User.init({
    name: { 
      type: DataTypes.STRING,
      validate:{
        is: ["^[a-zA-Z ]*$",'i'],
        len:[2-40]
      }
    },
    contact: { 
      type:DataTypes.INTEGER,
      validate:{
        len:[2-20]
      }
    },
    email:{ 
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
          isEmail: true,
          notNull: true,
          notEmpty: true,
          min: 2,
          max: 30
      },
      set(value) {   
        this.setDataValue('email', value.toLowerCase());
      },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
          notNull: true,
          notEmpty: true,
          min: 5,
          max: 200
      },
      set(value) {   //setter
        // Storing passwords in plaintext in the database is terrible.
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue('password', bcrypt.hashSync(value, 10));
      }
    },
  },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};