const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Main extends Model {}

Main.init({
    // add properites here, ex:
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pref_gender: {
        type: DataTypes.STRING,
        allowNull: true
   },
   relationship: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    goal: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    language: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    worker: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ideal_date: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    profile_pic: {
        type: DataTypes.TEXT
    },
},{
    sequelize
});

module.exports=Main