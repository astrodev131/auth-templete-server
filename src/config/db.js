const mongoose = require("mongoose");
const { DB_URI } = require("./env");

const connectDB = async () => {
  try {
    // Remove useNewUrlParser and useUnifiedTopology options
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
