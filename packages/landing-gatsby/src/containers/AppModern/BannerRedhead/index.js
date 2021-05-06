/* eslint-disable */
import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, { BannerContent } from './banner.style';

import circleBorder from 'common/src/assets/image/appModern/shape.svg';

const Banner = () => {
  return (
    <BannerWrapper id="home" alt="kauneus hieronta kampaaja ja jalkahoito">
      <Container>
        <BannerContent>
          <Fade up delay={200}>
            <Heading as="h1" content="Kauneus & Hieronta" />
          </Fade>
        </BannerContent>
      </Container>
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
