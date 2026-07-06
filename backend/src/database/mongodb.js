const mongoose = require("mongoose");
const env = require("../config/env");

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);

    console.log("==================================");
    console.log("✅ MongoDB Connected Successfully");
    console.log("==================================");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;