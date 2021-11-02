const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Survey extends Model {}

Survey.init({
    pref_gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dating_for: {
        type: DataTypes.STRING,
        allowNull: false
    },
    relationship_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    programmer_type: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    programmer_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ideal_date: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false 
})

module.exports=Survey