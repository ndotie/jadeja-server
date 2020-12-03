const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const WeDo = sequelize.define("partners", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = WeDo;
