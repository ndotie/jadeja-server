const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const CategoryPoint = sequelize.define("category_point", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  picture: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
});

module.exports = CategoryPoint;
