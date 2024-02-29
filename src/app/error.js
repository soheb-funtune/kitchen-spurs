"use client";
import React, { useEffect, useState } from "react";

export default function Error({ error, reset }) {
  const [errorState, setErrorState] = useState();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    setErrorState(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-red-500 mb-4">{errorState?.toString()}</p>
        <button
          onClick={() => reset()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
