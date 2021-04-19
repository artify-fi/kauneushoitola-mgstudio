import React from 'react';
import { StaticImage } from '../components/Layout';

const Hero = () => {
  return (
    <>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="./images/kampaaja_w.webp"
            alt="hairdresser"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
        </header>
      </main>
    </>
  );
};

export default Hero;
