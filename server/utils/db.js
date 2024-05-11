import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Failed to connect MongoDB:", error);
    process.exit(1); // Exiting the process with a non-zero status code to indicate failure
  }
};

export default connectDB;
