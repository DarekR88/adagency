import * as React from "react";
import "./SideMenu.scss";
import { NavLink } from "react-router-dom";

const SideMenu = ({ isOpen }) => {
  return (
    <div className="drawer-wrapper">
      <div
        className={`side-drawer ${isOpen ? "open" : ""}`}
        id="side-drawer"
      >
      </div>
    </div>
  );
};

export default SideMenu;