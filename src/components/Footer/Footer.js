import * as React from 'react';
import "./Footer.scss"
import instaIcon from "../../static/icons/icons8-instagram-50.png"
import fbIcon from "../../static/icons/icons8-facebook-50.png"

const Footer = () => {
  return <div className="footer" id='footer'>
    <p className='copy-right'>&#169; 2022 AdAgent</p>
    <a className='instagram-link'><img className="instagram-icon" src={instaIcon} alt='instagram icon'/></a>
    <a className='facebook-link'><img className="fb-icon" src={fbIcon} alt='facebook icon'/></a>
  </div>;
};

export default Footer;