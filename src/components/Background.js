import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Background.css';
import Logo from './Logo.png';
function Background() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LET'S <span className='title'>GET BAKING</span></h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
      <img src={Logo} alt="" className="logo-container" />
    </div>
  );
}

export default Background;