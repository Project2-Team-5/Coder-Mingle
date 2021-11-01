const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {}

User.init({
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[8]
        }
    }
},
{
    hooks:{
        beforeCreate(newUser){
            newUser.password = bcrypt.hashSync(newUser.password,10)
            return newUser
        },
        beforeUpdate(updatedUser){
            updatedUser.password = bcrypt.hashSync(updatedUser.password,10);
            return updatedUser;
        }
    },
    sequelize,
    timestamps: false
})

module.exports=User