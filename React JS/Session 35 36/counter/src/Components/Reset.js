import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

const Reset = () => {
  const { reset } = useContext(CounterContext);
  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Reset;
