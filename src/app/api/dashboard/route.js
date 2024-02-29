import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Transaction } from "@/DB-Connection/schemas/transaction";

export async function GET() {
  try {
    await mongoose.connect(process.env.mongo_url);
    const data = await Transaction.find();
    let obj = {};
    console.log({ data });
    data?.map((item) => {
      let month = item?.date?.split("-")?.[1];
      console.log({ month });
      if(obj?.[month]){
          obj?.[month]  =   obj?.[month] + item?.amount

      }else{
          obj?.[month]  = item?.amount
      }
    });
    return NextResponse.json({
      message: "Hello - GET Dashboard data",
      data: { amountObj: obj },
    });
  } catch (err) {
    console.log(err);
  }
}
