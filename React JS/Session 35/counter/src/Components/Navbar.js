import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/increase" activeStyle={{ color: "red" }} end>
        Increase
      </NavLink>

      <NavLink to="/decrease" activeStyle={{ color: "red" }}>
        Decrease
      </NavLink>

      <NavLink to="/reset" activeStyle={{ color: "red" }}>
        Reset
      </NavLink>
    </div>
  );
};

export default Navbar;
