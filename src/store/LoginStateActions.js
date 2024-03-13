// actions.js

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (userId) => ({
  type: LOGIN,
  payload: {
    userId,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
