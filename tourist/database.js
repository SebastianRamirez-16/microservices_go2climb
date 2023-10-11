const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('touristDB', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
