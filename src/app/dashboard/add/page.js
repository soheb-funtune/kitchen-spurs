"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { transactionHistory } from "@/app/state/reducers/counterReducer";

const AddTransaction = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    console.log({ data });
    // dispatch(transactionHistory({ ...data }));
    const res = await fetch("http://localhost:3000/api/dashboard/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify(data),
    });

    const apiRes = await res.json();
    apiRes?.msg && reset();
    console.log({ apiRes });
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full max-w-lg bg-white m-auto p-4 py-8 md:shadow-lg md:px-8 rounded-lg"
      >
        <div className=" flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2 mb-2 md:mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-xs md:text-base font-bold mb-1 md:mb-2 "
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Enter Description"
              {...register("description", { required: true })}
              className="shadow appearance-none border rounded w-full py-[6px] md:py-2 px-[8px] md:px-3 text-[12px] md:text-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.description && (
              <p className="text-red-500 text-xs italic">
                Description is required
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-2 md:mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700  text-xs md:text-base font-bold mb-1 md:mb-2 "
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter Amount"
              {...register("amount", { required: true })}
              className="shadow appearance-none border rounded w-full py-[6px] md:py-2 px-[8px] md:px-3 text-[12px] md:text-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.amount && (
              <p className="text-red-500 text-xs italic">Amount is required</p>
            )}
          </div>
        </div>
        <div className=" flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2 mb-2 md:mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 text-xs md:text-base font-bold mb-1 md:mb-2 "
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter Category"
              {...register("category", { required: true })}
              className="shadow appearance-none border rounded w-full py-[6px] md:py-2 px-[8px] md:px-3 text-[12px] md:text-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.category && (
              <p className="text-red-500 text-xs italic">
                Category is required
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-2 md:mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 text-xs md:text-base font-bold mb-1 md:mb-2 "
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              {...register("date", { required: true })}
              className="shadow appearance-none border rounded w-full py-[6px] md:py-2 px-[8px] md:px-3 text-[12px] md:text-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.date && (
              <p className="text-red-500 text-xs italic">Date is required</p>
            )}
          </div>
        </div>
        <div className="flex  gap-4 items-center justify-end mt-4">
          <Link
            href="/dashboard/list"
            className=" text-sm  pointer py-2 px-4 mt-4 shadow-sm underline rounded focus:outline-none focus:shadow-outline"
          >
            Goto-List
          </Link>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 pointer  text-xs md:text-sm text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
