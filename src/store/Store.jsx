import { createStore } from "redux";

export const actionType = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
};

const initState = {
  count: 0,
};

// REDUCER
const counter = (state = initState, action) => {
  switch (action.type) {
    case actionType.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionType.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionType.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

//create store
const store = createStore(counter);

export default store;
