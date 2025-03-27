import mongoose from "mongoose";

const connectTodatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    //console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}


export default connectTodatabase;