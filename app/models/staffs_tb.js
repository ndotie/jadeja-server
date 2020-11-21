const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Staffs = sequelize.define("staffs", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  position: Sequelize.STRING,
  description: Sequelize.TEXT,
  picture: Sequelize.STRING,
});

module.exports = Staffs;
