// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import comingSoonReducer from "./ComingSoonSlice";

const store = configureStore({
  reducer: {
    comingSoon: comingSoonReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools Extension
});

export default store;
