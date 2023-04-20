import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isOpen, click }) => {

    return (
      <div className={`burger-wrapper ${isOpen ? "open" : ""}`} onClick={click}>
        <div className="burger-btn" />
      </div>
    );
  }

export default Hamburger;