import { NextResponse } from "next/server";
import { Transaction } from "@/DB-Connection/schemas/transaction";
import mongoose from "mongoose";

export async function GET() {
  try {
    await mongoose.connect(process.env.mongo_url);
    const transaction = await Transaction.find();
    console.log("Database connection is successful");
    var obj = ["nothing"];
    transaction?.map((item) => {
      let month = Number(item?.date?.split("-")?.[1]);
      console.log({ month });
      if (obj[month]) {
        obj[month] = obj[month] + item?.amount;
      } else {
        obj[month] = item?.amount;
      }
    });
    return NextResponse.json({
      message: "Hello - GET Dashboard data",
      data: { amountObj: obj },
    });
  } catch (error) {
    console.log("Database connection failed:", error);
  }
}
