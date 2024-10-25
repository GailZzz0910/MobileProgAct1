import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // ilhanan nga connected nashas DB with literal templates (console output)
    console.log("mongo_uri: ", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    // wahahaha d connected (console output)
    console.log("Error: wa sha na konek", error.message);
    process.exit(1); 
  }
};
