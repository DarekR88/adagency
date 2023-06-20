import * as React from "react";
import "./Paper.scss";
import planeImg from "../../static/images/paperplane.jpg";
import Banner from "../Banner/Banner";

const Paper = () => {
  return (
    <div className="paper">
      <Banner
        background="black"
        imgSrc={planeImg}
        color="white"
        title="Paper"
        text="Get your advertising into the real world."
        side="right"
      />
      <div className="intro">
        <p>
          Top tier market research has revealed that paper marketing is the most
          effective way to advertise for you business. At AdCo we analyze your
          business's intended clientele to maximize your investment.
        </p>
      </div>
      <div className="offers">
        <div className="offer-card">
          <h2 className="offer-title">Mailers</h2>
          <p className="offer"></p>
        </div>
        <div className="offer-card">
          <h2 className="offer-title"></h2>
          <p className="offer"></p>
        </div>
      </div>
    </div>
  );
};

export default Paper;
