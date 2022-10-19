import React from "react";

import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((store) => store.count);
  return <div className="counter-value">{count}</div>;
};

export default Counter;
