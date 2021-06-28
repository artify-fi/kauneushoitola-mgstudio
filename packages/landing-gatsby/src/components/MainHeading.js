import React from 'react';
import styled from 'styled-components';
import Heading from 'common/src/components/Heading';

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .mainheading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Playfair Display;
    color: #000;
    font-size: 3.2rem;
    margin-top: 3em;
    margin-bottom: 1.3em;
    line-height: 1.4em;
    font-weight: 700;
    letter-spacing: -1px;
    align-self: center;
    @media only screen and (max-width: 1366px) {
      font-size: 2.8rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 2.6rem;
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 2.4rem;
      text-align: center;
      margin-top: 3.2rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 2rem;
      text-align: center;
      margin-top: 2rem;
    }
  }
`;

const MainHeading = () => {
  return (
    <SectionWrapper id="palvelumme" className="mainheading">
      <Heading as="h2" className="mainheading" content="Palvelumme" />
    </SectionWrapper>
  );
};

export default MainHeading;
