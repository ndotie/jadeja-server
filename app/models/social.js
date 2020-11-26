const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Social = sequelize.define("social", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  facebook: Sequelize.STRING,
  instagram: Sequelize.STRING,
  twitter: Sequelize.STRING,
  telegram: Sequelize.STRING,
  youtube: Sequelize.STRING,
  email: Sequelize.STRING,
  aboutus: Sequelize.TEXT,
  trademark: Sequelize.TEXT,
  location: Sequelize.TEXT,
  phone: Sequelize.TEXT,
  street: Sequelize.TEXT,
  region: Sequelize.TEXT,
  house: Sequelize.TEXT,
});

module.exports = Social;
