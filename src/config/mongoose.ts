import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/test";

export const connectDb = () => {
  try {
    mongoose.connect(mongoUri, () => {
      console.log("Db connected successfully");
    });
  } catch (err) {
    console.log(err);
  }
};
