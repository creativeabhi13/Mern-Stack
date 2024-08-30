import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";
import { useNavigate } from "react-router-dom";

const Increase = () => {
  const navigate = useNavigate();
  const { increment } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}>Increase</button>
      <br />
      <br />
<button onClick={()=>navigate("/decrease")}>Go to Decrease</button>
<br />
<br />
<button onClick={()=>navigate("/reset")}>Go to Reset</button>

    </div>
  );
};

export default Increase;
