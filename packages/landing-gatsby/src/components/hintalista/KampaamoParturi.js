import React from 'react';
import styled from 'styled-components';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Container from 'common/src/components/UI/ContainerTwo';
import Line from '../../components/reusableComponents/Line';

const SectionWrapper = styled.section`
  position: relative;
  background-color: #fafae4;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90vw;
  margin-bottom: 3em;
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
    margin-top: 2.2em;
    font-weight: 600;
    letter-spacing: -1px;
    text-align: center;
    @media only screen and (max-width: 1366px) {
      font-size: 2.2rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 1.8rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.4rem;
      margin-top: 1em;
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
    color: #2e4371;
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
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;

const KampaamoParturi = () => {
  return (
    <SectionWrapper>
      <Container style={{ padding: '0px' }}>
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
              content="30€"
            />
          </Content>
          <Line color="#fff" width="110%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Miesten hiusten leikkaus"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="25€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Koneajo" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="15€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Mallinmuutos" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="35 - 55€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Otsatukka" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="8 - 12€"
            />
          </Content>
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Lasten hiusten leikkaus (alle 7v.)"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="20€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Permanentti" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="70 - 110€"
            />
          </Content>
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Pesu ja hieronta"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="15€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Föönkampaus" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="30 - 50€"
            />
          </Content>

          {/* V'rit */}
          <Heading as="h2" className="hintalistaheading" content="Värit" />
          <Content>
            <Text as="p" className="hintalistatext" content="Lyhyt hiukset" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="60€"
            />
          </Content>
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Puolipitkät hiukset"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="70€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Pitkät hiukset" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="80 - 100€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Raidat" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="60 - 100€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Tyviväri" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="55€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Föönkampaus" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="30 - 50€"
            />
          </Content>
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Toinen lisäväri
              "
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="10€"
            />
          </Content>
          <Content>
            <Text as="p" className="hintalistatext" content="Raidat + sävy " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="alk. 100€"
            />
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default KampaamoParturi;
