import { NextResponse } from "next/server";
import { Transaction } from "@/DB-Connection/schemas/transaction";
import mongoose from "mongoose";

export async function GET() {
  try {
    await mongoose.connect(process.env.mongo_url);
    const transaction = await Transaction.find();
    console.log("Database connection is successful");
    return NextResponse.json({ msg: "Successfully!", data: transaction });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
