import React from "react";

import { useDispatch } from "react-redux";
import { actionType } from "../store/Store";

export const CounterNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          dispatch({
            type: actionType.DECREASE,
          });
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          dispatch({
            type: actionType.RESET,
          });
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch({
            type: actionType.INCREASE,
          });
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default CounterNav;
