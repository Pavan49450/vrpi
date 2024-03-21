// reducer.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN, LOGINDA, LOGOUT, loginWithUserData } from "./LoginStateActions";
import UserDataComponent from "../data/user";
import { useSelector } from "react-redux";

const initialUserState = {
  isVRPIUserLoggedIn: localStorage.getItem("isVRPIUserLoggedIn") === "true",
  userId: localStorage.getItem("userId"),
};

const initialUserDataState = {
  userData: null,
  // JSON.parse(localStorage.getItem("userData")),
};

const UserStateReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("isVRPIUserLoggedIn", "true");
      localStorage.setItem("userId", action.payload.userId);
      return {
        ...state,
        isVRPIUserLoggedIn: true,
        userId: action.payload.userId,
      };
    case LOGOUT:
      localStorage.setItem("isVRPIUserLoggedIn", "false");
      localStorage.removeItem("userId");
      return {
        ...state,
        isVRPIUserLoggedIn: false,
        userId: null,
      };
    default:
      return state;
  }
};

// Thunk action creator to fetch user data
const fetchUserData = () => async (dispatch, getState) => {
  // const { userId } = getState().UserStateReducer;
  // const userId = useSelector((state) => state.login.userId);
  const userId = localStorage.getItem("userId");
  const userData = UserDataComponent(); // Fetch user data
  dispatch(loginWithUserData(userData)); // Dispatch action to update user data
  console.log(userId);
  // if (userId) {
  //   try {
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // }
};

const UserDataStateReducer = (state = initialUserDataState, action) => {
  switch (action.type) {
    case LOGINDA:
      // localStorage.setItem("userData", JSON.stringify(action.payload.userData));
      return {
        ...state,
        userData: action.payload.userData,
      };
    case LOGOUT:
      localStorage.removeItem("userData");
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export { UserStateReducer, UserDataStateReducer, fetchUserData };
