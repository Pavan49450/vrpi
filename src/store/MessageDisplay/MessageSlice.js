// reducer.js

const initialState = {
  message: "",
  type: "",
  dontClose: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        dontClose: action.payload.dontClose,
      };
    case "CLEAR_MESSAGE":
      return {
        ...state,
        message: "",
        type: "",
        dontClose: false,
      };
    default:
      return state;
  }
};

export default messageReducer;
