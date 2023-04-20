import * as React from "react";
import "./TextImg.scss";

const TextImg = (props) => {
  return (
    <div className="text-img" style={{ background: props.background }}>
      <img className="br-img" src={props.imgSrc} alt="image description" />
      <h1 className="title" style={{ color: props.color }}>
        {props.title}
      </h1>
      <p className="text" style={{ color: props.color }}>
        {props.text}
      </p>
      <button className="text-img-btn">Learn more</button>
    </div>
  );
};

export default TextImg;
