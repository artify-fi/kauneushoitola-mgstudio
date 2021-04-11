import React from 'react';
import styled from 'styled-components';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Container from 'common/src/components/UI/ContainerTwo';

const SectionWrapper = styled.section`
  position: relative;
  background-color: #fafae4;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 80px;
`;

export const Section = styled.section`
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
  .hintalistaheading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Playfair Display;
    color: #bd5f91;
    font-size: 2.8rem;
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
    color: #ff3f66;
    font-size: 2.2rem;
    line-height: 1.4em;
    margin-top: 2.6em;
    font-weight: 700;
    letter-spacing: -1px;
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

const KampaamoParturi = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Heading
            as="h2"
            className="hintalistaheading"
            content="Kampaamo- parturi"
          />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Naisten hiusten leikkaus"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content=" 30€"
            />
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default KampaamoParturi;
