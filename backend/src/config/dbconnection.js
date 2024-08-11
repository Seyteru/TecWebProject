const { Sequelize } = require("sequelize");

const database = new Sequelize("pressportal", "postgres", "Simone.2001",{
    host: "localhost",
    dialect: "postgres",
    logging: false
});

module.exports = database;

