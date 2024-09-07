const mongoose = require("mongoose");
const  dotenv  = require("dotenv");


dotenv.config();

const URI = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {});
    console.log("DB Conntected with db_with_Creativeabhi13");
  } catch (err) {
    console.log("DB Connection Failed", err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
