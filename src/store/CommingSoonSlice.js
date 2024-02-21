// src/redux/commingSoonSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isComingSoon: false,
};

const commingSoonSlice = createSlice({
  name: "comingSoon",
  initialState,
  reducers: {
    setComingSoon(state, action) {
      state.isComingSoon = action.payload;
    },
  },
});

export const { setComingSoon } = commingSoonSlice.actions;

export default commingSoonSlice.reducer;
