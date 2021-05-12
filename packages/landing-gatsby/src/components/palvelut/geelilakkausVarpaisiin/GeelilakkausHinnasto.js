import React from 'react';
import styled from 'styled-components';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Container from 'common/src/components/UI/ContainerTwo';
import Line from '../../reusableComponents/Line';

const SectionWrapper = styled.section`
  position: relative;
  background-color: #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  margin-bottom: 3em;
  margin-top: -2em;
`;

export const Section = styled.section`
  grid-template-columns: 1fr;
  flex-direction: column;

  .hintalistaheading {
    display: block;
    font-family: Playfair Display;
    max-width: 80vw;
    color: #ff3f66;
    font-size: 2.2rem;
    line-height: 1.4em;
    font-weight: 600;
    letter-spacing: -1px;
    text-align: center;
    padding-top: 3em;
    padding-bottom: 2em;
    @media only screen and (max-width: 1366px) {
      font-size: 2.2rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 1.8rem;
      margin-top: 2em;
      padding-bottom: 2em;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.4rem;
      margin-top: 1em;
      padding-bottom: 0.2em;
    }
  }
  .hintalistaheading:after {
    content: ''; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 30%; /* Change this to whatever width you want. */
    padding-top: 10px; /* This creates some space between the element and the border. */
    border-bottom: 2px solid #ff3f66; /* This creates the border. Replace black with whatever color you want. */
  }

  .hintalistasubheading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Playfair Display;
    color: #000;
    font-size: 2.1rem;
    line-height: 1.4em;
    margin-top: 0.6em;
    font-weight: 500;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 1.7rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.3rem;
      margin-top: 2em;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80vw;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
  }

  .hintalistatext {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Playfair Display;
    color: #000;
    font-size: 1.4rem;
    line-height: 1.4em;
    margin-top: 0.6em;
    font-weight: 500;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 991px) {
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      text-align: center;
      margin-right: 2em;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.1rem;
      margin-right: 0.2em;
      text-align: center;
      margin-top: 1em;
    }
  }
`;

const OlaplexHintalista = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Heading
            as="h2"
            className="hintalistaheading"
            content="Geelilakkaus Varpaisiin Hinnasto"
          />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Varpaankynsien geelilakkaus"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="40€"
            />
          </Content>
          <Line color="#fff" width="100%" />
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default OlaplexHintalista;
