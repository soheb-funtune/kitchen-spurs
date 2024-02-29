import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "Hello - APP Route" });
  } catch (err) {
    console.log(err);
  }
}
