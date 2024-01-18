import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectDB = async () => {
  try {
    const mongoURI=process.env.dbURI_LOCAL
    if(!mongoURI){
        throw new Error("mongo url not defined")
    }
    const conn= await mongoose.connect(mongoURI)
    console.log(`MongoDB Connected : ${conn.connection.host}`);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
