import React from "react";
import Link from "next/link";
import AreaChart from "@/components/AreaChart/AreaChart";
async function getData() {
  const res = await fetch("http://localhost:3000/api/dashboard");

  const result = await res.json();
  if (!result) {
    throw new Error("Failed to fetch data");
  }
  console.log({ result });
  return result;
}

export default async function Dashboard() {
  const data = await getData();
  return (
    <div className="py-4 md:py-6 lg:py-8">
      <div className="flex items-center justify-end gap-4">
        <Link
          className="underline text-sm md:text-md  text-green-500 border px-2 md:px-4 py-2 rounded-md"
          href={"/dashboard/list"}
        >
          Transaction List
        </Link>
        <Link
          className="underline text-sm md:text-md text-green-500 border px-2 md:px-4 py-2 rounded-md"
          href={"/dashboard/add"}
        >
          Add Transaction
        </Link>
      </div>
      <h1 className="font-semibold ">
        Dashboard
        <div className="h-1 w-10 bg-orange-400 rounded-lg mt-1"></div>
      </h1>
      <div className="w-[50%] h-auto max-h-[80vh]">
        <AreaChart />
      </div>
    </div>
  );
}
