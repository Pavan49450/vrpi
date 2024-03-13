// reducer.js

import { LOGIN, LOGOUT } from "./LoginStateActions";

const initialState = {
  isVRPIUserLoggedIn: localStorage.getItem("isVRPIUserLoggedIn") === "true",
  userId: localStorage.getItem("userId"),
};

const LoginReducer = (state = initialState, action) => {
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

export default LoginReducer;
