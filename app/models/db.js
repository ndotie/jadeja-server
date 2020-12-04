const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

const database = new Sequelize(
  "dbjadeja", //db name
  "jadejaadmin", //database user
  "JadejaFarms99!", //password
  {
    host:
      "ls-99d6edbb52e541ce8c40905abc4f74aa4fbe3e9b.c0r2za0sodgr.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    retry: {
      match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ETIMEDOUT/,
        /ESOCKETTIMEDOUT/,
        /EHOSTUNREACH/,
        /EPIPE/,
        /EAI_AGAIN/,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
      ],
      max: 5,
      pool: { maxConnections: 5, maxIdleTime: 30, minConnections: 1 },
    },
  }
);

database
  .sync()
  .then((r) => {})
  .catch((e) => console.log(e));

// const develop = new Sequelize(
//   "jadejadb", //db name
//   "root", //database user
//   "", //password
//   {
//     host: "localhost",
//     dialect: "mysql",
//     logging: function (e) {
//       console.log(e);
//     },
//     pool: {
//       max: 5,
//       min: 0,
//       idle: 10000,
//     },
//   }
// );

// develop
//   .sync()
//   .then((r) => {})
//   .catch((e) => console.log(e));

// module.exports = develop;
