import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  return (
    <header className="header">

    </header>
  );
};

export default Header;
