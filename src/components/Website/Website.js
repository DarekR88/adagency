import * as React from "react";
import "./Website.scss";
import Banner from "../Banner/Banner";
import websiteImg from "../../static/images/website.jpg";

const Website = () => {
  return (
    <div className="website">
      <Banner
        background="black"
        imgSrc={websiteImg}
        color="white"
        title="Websites"
        text="Make your business stand out with a modern professionally designed website."
        side="right"
      />
      {/* <div className='intro'>
      <h1 className='intro-title'>Dynamic Websites for the Modern Internet</h1>
      <p>Make your business stand out with a modern professionally designed website.</p>
      <img className='intro-img' src={websiteImg}/>
    </div> */}
      <div className="pricing">
        <h1>Website Design and Development</h1>
        <p>
          Websites can vary in scope and complexity. We work with you to
          maximize your budget. From single page websites designed to advertise
          your service, or a full blown e-commerce website, we've got you
          covered. SEO &#40;Search Engine Optimization&#41; will ensure your
          business shows up when searched for online. Let us know what kind of
          website you need to take your small business to the next level. Our
          experts will deliver a final product that you can be proud of.
        </p>
        <div className="single">
          <p>Single page websites starting at:</p>
          <p>
            $700<span>.00</span>
          </p>
          <p>Time-frame: 2-4 weeks</p>
        </div>
        <div className="multi">
          <p>Multiple page websites starting at:</p>
          <p>
            $2000<span>.00</span>
          </p>
          <p>Time-frame: 4-8 weeks</p>
        </div>
        <div className="e-commerce">
          <p>E-commerce and member functionality websites starting at:</p>
          <p>
            $4000<span>.00</span>
          </p>
          <p>Time-frame: 6-10 weeks</p>
        </div>
      </div>
      <div className="process">
        <div className="card">
          <h2 className="card-title">Consultation</h2>
          <p className="card-text">
            Getting to know you and what you need is very important for creating
            an authentic website. During the consultation process we will find
            out what kind of website you need and all relevant branding.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Design</h2>
          <p className="card-text">
            Using the information provided our in-house designer will create a
            visual representation of what your website will look like. After
            you've confirmed the design our website developers will get to work.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Build</h2>
          <p className="card-text">
            Our professional website developers will build your website to the
            highest standard and deliver a website experience that will wow
            potential customers.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Delivery and Maintenance</h2>
          <p className="card-text">
            Once your website is finished we have multiple options for your convenience. 
          </p>
        </div>
        <div className="how">
          <p>To get started send us a message.</p>
        </div>
      </div>
    </div>
  );
};

export default Website;
