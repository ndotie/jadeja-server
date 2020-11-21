const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const database = new Sequelize(
  "jadejadb", //db name
  "root", //database user
  "", //password
  {
    host: "localhost",
    dialect: "mysql",
  }
);

database.sync();

module.exports = database;
