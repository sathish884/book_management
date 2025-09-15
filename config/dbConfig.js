const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    console.log("RAW MONGO_URI:", JSON.stringify(process.env.MONGO_URI));

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "book_management",
    });

    console.log("Database Connected to:", mongoose.connection.name);
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
