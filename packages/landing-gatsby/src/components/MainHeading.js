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
    color: #bd5f91;
    font-size: 3.2rem;
    line-height: 1.4em;
    margin-top: 2.6em;
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
    }
    @media only screen and (max-width: 480px) {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

const MainHeading = () => {
  return (
    <SectionWrapper id="palvelumme" className="mainheading">
      <Heading as="h1" className="mainheading" content="Palvelumme" />
    </SectionWrapper>
  );
};

export default MainHeading;
