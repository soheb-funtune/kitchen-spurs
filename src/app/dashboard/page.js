"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AreaChart from "@/components/AreaChart/AreaChart";

export const Dashboard = () => {
  const [areaChartData, setAreaChart] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch("http://localhost:3000/api/dashboard", {
          method: "GET",
        });
        res = await res?.json();
        const [a, ...rest] = res?.data?.amountObj;
        setAreaChart(rest);
      } catch (error) {
        throw Error("Dashboard Error:", error);
      }
      //   const result = await res.json();
      //   if (!result) {
      //     throw new Error("Failed to fetch data");
      //   }
      //   console.log({ result });
    };
    getData();
  }, []);
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
      <div className=" mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="shadow-lg p-4 h-auto rounded-lg  max-h-[80vh]">
          <AreaChart areaChartData={areaChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
