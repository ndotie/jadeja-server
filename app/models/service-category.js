const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const ServiceCategory = sequelize.define("service_category", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
});

module.exports = ServiceCategory;
