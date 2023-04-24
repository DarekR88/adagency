import * as React from 'react';
import "./Website.scss"
import websiteImg from "../../static/images/websiteImg.png"

const Website = () => {
  return <div className="website">
    <div className='intro'>
      <h1 className='intro-title'>Dynamic Websites for the Modern Internet</h1>
      <p>Make your business stand out with a modern professionally designed website.</p>
      <img className='intro-img' src={websiteImg}/>
    </div>
    <div className='pricing'>  
      <p>Websites can vary in scope and complexity. We work with you to maximize your budget.</p>
    </div>
    <div className='process'>
      <div className='how'>
        <p>To get started send us a message.</p>
      </div>
    </div>
  </div>;
};

export default Website;