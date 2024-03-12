// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import comingSoonReducer from "./ComingSoonSlice";
import UserReducer from "./UserSlice";
import LoginReducer from "./LoginStateSlice";

const store = configureStore({
  reducer: {
    comingSoon: comingSoonReducer,
    user: UserReducer,
    login: LoginReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
