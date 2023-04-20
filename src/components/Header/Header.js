import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";
import SideMenu from "../SideMenu/SideMenu";
import Backdrop from "../Backdrop/Backdrop";

const Header = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  return (
    <header className="header">
      <Hamburger isOpen={isSideDrawerOpen} click={toggleDrawer} />
      <SideMenu isOpen={isSideDrawerOpen} />
      <Backdrop isOpen={isSideDrawerOpen} click={toggleDrawer} />
    </header>
  );
};

export default Header;
