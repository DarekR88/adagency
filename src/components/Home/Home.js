import * as React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import TextImg from "../TextImg/TextImg";
import meetingImg from "../../static/images/meeting.jpg";
import socialImg from "../../static/images/socialMedia.jpg";
import websiteImg from "../../static/images/websiteDark.jpg";
import brandImg from "../../static/images/brandingDark.jpg";
import paperImg from "../../static/images/paper.jpg";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-banner">
        <img className="home-img" src={meetingImg} alt="meeting image" />
        <h1 className="home-title">AdCo</h1>
        <h2 className="img-blurb">
          Complete marketing solutions for the social media world
        </h2>
      </div>
      <div className="home-content">
        <div className="intro">
          <div className="line-top"></div>
          <p className="home-blurb">
            Starting a business can be hard, let our ad experts help you get
            your name out there.
          </p>
          <div className="line-bottom"></div>
        </div>
        <div className="services">
          <TextImg
            background="black"
            imgSrc={websiteImg}
            color="white"
            title="Websites"
            text="Custom websites for the modern internet"
            side="right"
          />
          <TextImg
            background="white"
            imgSrc={socialImg}
            color="black"
            title="Social Media Campaign"
            text="Custom posts across all social media"
            side="left"
          />
          <TextImg
            background="black"
            imgSrc={brandImg}
            color="white"
            title="Branding"
            text="Up your brand recognition"
            side="right"
          />
          <TextImg
            background="white"
            imgSrc={paperImg}
            color="black"
            title="Paper"
            text="Paper campaign based on your branding"
            side="left"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
