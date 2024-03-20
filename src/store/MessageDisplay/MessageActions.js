// actions.js

export const setMessage = (message, type, dontClose) => {
  return {
    type: "SET_MESSAGE",
    payload: { message, type, dontClose },
  };
};

export const clearMessage = () => {
  return {
    type: "CLEAR_MESSAGE",
  };
};
