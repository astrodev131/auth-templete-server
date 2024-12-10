require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
};
