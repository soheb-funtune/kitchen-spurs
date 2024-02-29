import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: String,
  description: String,
});

export const Transaction =
  mongoose.models.transactions ||
  mongoose.model("transactions", transactionSchema);
