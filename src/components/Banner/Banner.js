import * as React from "react";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <div className="text-img" style={{ background: props.background }}>
      <img className="br-img" src={props.imgSrc} alt="image description" />
      <h1 className={`title ${props.side}`}>
        {props.title}
      </h1>
      <p className={`text ${props.side}`}>
        {props.text}
      </p>
      <button className={`text-img-btn ${props.side}`}>Learn more</button>
    </div>
  );
};

export default Banner;