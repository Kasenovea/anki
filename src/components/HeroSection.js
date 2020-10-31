import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/videokg.mp4' autoPlay loop muted />
      <h1>Kirghizistan-Italia</h1>
      <p>Italian Kyrgyz community in Milan</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contacts
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Start to enjoy <i className='fas fa-compass' />
          
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;