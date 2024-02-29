// redux/reducers/counterReducer.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    transactionHistory: [
      // {
      //   amount: "2000",
      //   category: "Currant",
      //   date: "2024-02-29",
      //   description: "2000 thoousant rupees",
      // },
      // {
      //   amount: "4000",
      //   category: "Saving",
      //   date: "2024-02-29",
      //   description: "4000 rupees",
      // },
      // {
      //   amount: "3000",
      //   category: "Currant",
      //   date: "2024-02-29",
      //   description: "3000 thousant rupees",
      // },
    ],
  },
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    transactionHistory: (state, action) => {
      state.transactionHistory = [action.payload, ...state.transactionHistory];
      console.log("transactionHistory:", state.transactionHistory);
    },
  },
});

export const { increment, decrement, transactionHistory } =
  counterSlice.actions;
export default counterSlice.reducer;
