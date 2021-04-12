/* eslint-disable */
import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, { BannerContent } from './banner.style';

//import circleBorder from 'common/src/assets/image/appModern/shape.svg';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent style={{ position: 'fixed' }}>
          <Fade up delay={200}></Fade>
        </BannerContent>
      </Container>
      {/* <img
        className="bannerBottomShape"       
        alt="Bottom Circle"
      /> */}
    </BannerWrapper>
  );
};

export default Banner;
