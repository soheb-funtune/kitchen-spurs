"use client";
import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { transactionHistory as transactionReducer } from "@/app/state/reducers/counterReducer";

const List = () => {
  const [transaction, setTransactionHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_backend_url}/dashboard/list`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      console.log(res);
      setTransactionHistory(res?.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto pt-4 sm:pt-6">
      <h1 className="font-bold pb-4 "> Transaction List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-green-300">
              <th className="border px-4  py-2 text-sm">Amount</th>
              <th className="border px-4 py-2 text-sm">Category</th>
              <th className="border px-4 py-2 text-sm">Date</th>
              <th className="border px-4 py-2 text-sm  w-2/5">Description</th>
            </tr>
          </thead>
          <tbody>
            {transaction ? (
              transaction?.map((item, index) => (
                <tr key={index} className={""}>
                  <td className="border px-4 py-2 text-sm text-center ">
                    {item.amount}
                  </td>
                  <td className="border px-4 py-2 text-sm text-center ">
                    {item.category}
                  </td>
                  <td className="border px-4 py-2 text-sm text-center ">
                    {item.date}
                  </td>
                  <td className="border px-4 py-2 text-sm text-center  w-2/5">
                    {item.description}
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
