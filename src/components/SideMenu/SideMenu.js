import * as React from "react";
import "./SideMenu.scss";
import { NavLink } from "react-router-dom";

const SideMenu = ({ isOpen, click }) => {
  return (
    <div className="drawer-wrapper">
      <div className={`side-drawer ${isOpen ? "open" : ""}`} id="side-drawer">
        <ul className="nav-list">
          <li onClick={click}>
            <NavLink className="drawer-nav-buttons" to="/">
              Home
            </NavLink>
          </li>
          <li onClick={click}>
            <NavLink className="drawer-nav-buttons" to="/about">
              About
            </NavLink>
          </li>
          <li onClick={click}>
            <NavLink className="drawer-nav-buttons" to="/website">
              Website
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
