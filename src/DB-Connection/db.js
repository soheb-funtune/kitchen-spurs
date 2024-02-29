import mongoose from "mongoose";

export const DbConnection = async () => {
  await mongoose.connect(process.env.mongo_url);
};
