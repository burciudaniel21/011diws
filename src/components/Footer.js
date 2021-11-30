import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <h3 className='footer-title'>@GetBaking</h3>
      <a
        href="*"
        className="youtube s-link" 
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="*"
        className="facebook s-link"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="*" className="twitter s-link">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="*"
        className="instagram s-link"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>          
    </div>
  );
}