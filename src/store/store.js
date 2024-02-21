// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import commingSoonReducer from "./CommingSoonSlice";

const store = configureStore({
  reducer: {
    commingSoon: commingSoonReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools Extension
});

export default store;
