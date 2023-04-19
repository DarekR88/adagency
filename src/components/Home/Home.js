import * as React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import meetingImg from "../../static/images/meeting.jpg"

const Home = () => {
  return (
    <div className="home" id="home">
      <img className="home-img" src={meetingImg} alt="meeting image" />
      <div className="line-top"></div>
      <p className="home-blurb">Starting a small business can be hard, let our advertising experts help you get your name out there.</p>
      <div className="line-bottom"></div>
    </div>
  );
};

export default Home;
