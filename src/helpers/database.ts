import mongoose from "mongoose";

export const dbConnect = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error("Invalid MONGO_URL");
  }

  await mongoose.connect(process.env.MONGO_URL);
  console.log(`Connected to ${process.env.MONGO_URL}`);
};
