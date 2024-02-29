import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Transaction } from "@/DB-Connection/schemas/transaction";

export async function GET() {
  return NextResponse.json({ message: "Hello - GET from add" });
}

export async function POST(request) {
  // Next.js already parses request body, so access it directly:
  const reqData = await request.json();
  console.log("Form data:", reqData);
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("Database connection is successful");
    const transaction = new Transaction({
      ...reqData,
    });
    const res = await transaction.save();
    return NextResponse.json({ msg: "Successfully!", res });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
  // Return a consistent success message:
}
