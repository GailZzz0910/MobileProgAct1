import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("mongo_uri: ", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // Use backticks for template literals
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error: wa sha na konek", error.message);
    process.exit(1); // Exit process on failure
  }
};
