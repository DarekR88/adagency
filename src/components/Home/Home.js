import * as React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
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
        <h1 className="home-title">Great Ad</h1>
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
        <div className="home-offerings">
          <img className="offerings-img" src={websiteImg} />
          <h2 className="offerings-title">Websites</h2>
          <p className="blurb">Custom websites for the modern internet.</p>
          <p className="cost">
            Custom websites starting at $500.<span className="cents">00</span>
          </p>
        </div>
        <div className="home-offerings">
          <img className="offerings-img" src={socialImg} />
          <h2 className="offerings-title">Social Media Campaign</h2>
          <p className="blurb">Custom posts across all social media.</p>
          <p className="cost">
            Social media plans starting at $500.
            <span className="cents">00</span>
          </p>
        </div>
        <div className="home-offerings">
          <img className="offerings-img" src={brandImg} />
          <h2 className="offerings-title">Branding</h2>
          <p className="blurb">Up your brand recognition.</p>
          <p className="cost">
            Custom branding starting at $500.
            <span className="cents">00</span>
          </p>
        </div>
        <div className="home-offerings">
          <img className="offerings-img" src={paperImg} />
          <h2 className="offerings-title">Paper</h2>
          <p className="blurb">Paper ad campaign based on your branding.</p>
          <p className="cost">
            Paper campaigns starting at $500.
            <span className="cents">00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
