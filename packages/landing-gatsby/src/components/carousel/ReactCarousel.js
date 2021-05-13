import React from 'react';
import Container from 'common/src/components/UI/Container';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from './Carousel';
import './Carousel.css';

const Footer = () => {
  return (
    <Container>
      <Carousel>
        <StaticImage
          src="../../images/eilika/kauniit_kynnet1.webp"
          alt="phone"
        />
        ,
        <StaticImage
          src="../../images/eilika/kauniit_kynnet2.webp"
          alt="phone"
        />
        ,
        <StaticImage
          src="../../images/eilika/kauniit_kynnet3.webp"
          alt="phone"
        />
        ,
        <StaticImage
          src="../../images/eilika/kauniit_kynnet4.webp"
          alt="phone"
        />
        ,
      </Carousel>
    </Container>
  );
};

export default Footer;
