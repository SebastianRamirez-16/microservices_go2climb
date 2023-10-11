const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

class Tourist extends Model {}

Tourist.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {  
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {  
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {  
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    country: {  
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'tourist',
    timestamps: false
});

module.exports = Tourist;
