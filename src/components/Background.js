import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Background.css';

function Background() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mov' autoPlay loop muted />
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
    </div>
  );
}

export default Background;