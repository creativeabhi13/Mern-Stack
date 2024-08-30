import React, { useContext, useState } from "react";
import CounterContext from "./Context/CounterContext";
import Increase from "./Components/Increase";
import Decrease from "./Components/Decrease";
import Reset from "./Components/Reset";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DisplayCount from "./Components/DisplayCount";
import Invalid from "./Components/Invalid";

const App = () => {
  const obj = useContext(CounterContext);
  console.log(obj);

  return (
    <div>
      <Navbar />
      <h1>Counter App</h1>

      <Routes>
        <Route path="/" element={<DisplayCount />}>
          <Route path="increase" element={<Increase />} />
          <Route path="decrease" element={<Decrease />} />
          <Route path="reset" element={<Reset />} />
        </Route>

        <Route path="*" element={<Invalid />} />
      </Routes>
    </div>
  );
};

export default App;
