import React, { useEffect } from "react";
import "./Backdrop.scss";

const Backdrop = ({ isOpen, click }) => {

  return <div className={`backdrop ${isOpen ? "open" : ""}`} onClick={click} />;
};

export default Backdrop;
