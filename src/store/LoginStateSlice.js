// reducer.js

import { LOGIN, LOGOUT } from "./LoginStateActions";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  userId: localStorage.getItem("userId"),
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", action.payload.userId);
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.userId,
      };
    case LOGOUT:
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("userId");
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
      };
    default:
      return state;
  }
};

export default LoginReducer;
