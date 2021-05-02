import React from 'react';
import styled from 'styled-components';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Container from 'common/src/components/UI/ContainerTwo';
import Line from '../reusableComponents/Line';

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
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  .hintalistaheading {
    display: grid;
    justify-self: center;
    font-family: Playfair Display;
    max-width: 80vw;
    color: #ff3f66;
    font-size: 2.2rem;
    line-height: 1.4em;
    font-weight: 600;
    letter-spacing: -1px;
    padding-top: 3em;
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
    margin-left: 3.8em;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: 94vw;
  padding-left: 2em;
  padding-right: 2em;

  @media only screen and (min-width: 440px) and (max-width: 998px) {
    width: 90vw;
    padding-left: 3em;
    padding-right: 3em;
  }

  @media only screen and (min-width: 999px) and (max-width: 1366px) {
    width: 86vw;
    padding-left: 5em;
    padding-right: 5em;
  }

  @media only screen and (min-width: 1367px) {
    width: 78vw;
    padding-left: 6em;
    padding-right: 6em;
  }

  .hintalistatext {
    display: grid;
    justify-content: space-between;
    align-items: auto;
    font-family: Playfair Display;
    color: #000;
    font-size: 1.4rem;
    line-height: 1.6em;
    margin-top: 0.6em;
    font-weight: 500;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 1.4rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.1rem;
      margin-right: 0.2em;
      text-align: center;
      margin-top: 1em;
    }
  }
`;

const Hintalista = () => {
  return (
    <SectionWrapper>
      {/* Kampaaja */}
      <Container>
        <Section>
          <Heading
            as="h1"
            className="hintalistaheading"
            content="Kampaaja (oppilastyö) Hinnasto"
          />

          {/* Section 1 */}
          <Heading as="h2" className="hintalistasubheading" content="Raidat:" />
          <Content>
            <Text as="p" className="hintalistatext" content="Lyhyt " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="40€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Keskipitkät  " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="50€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Pitkät" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="60€"
            />
          </Content>
          <br />
          <br />
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Tyviväri " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="30€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Sävytys  " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="25€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Latvojen leikkkaus"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="10-15€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Otsatukka" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="5-10€"
            />
          </Content>
        </Section>
      </Container>

      {/* Olaplex */}
      <Container>
        <Section>
          <Heading
            as="h2"
            className="hintalistaheading"
            content="Olaplex hinnasto"
          />

          {/* Section 1 */}
          <Heading
            as="h3"
            className="hintalistasubheading"
            content="Föönaus + Olaplex-hoito"
          />
          <Content>
            <Text as="p" className="hintalistatext" content="Lyhyet " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="30€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Puolipitkät " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="35€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Pitkät hiukse" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="40€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Erittäin pitkät hiukset"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="45€"
            />
          </Content>

          {/* Section 2 */}
          <Heading
            as="h3"
            // style={{marginTop: '-0.3em'}}
            className="hintalistasubheading"
            content="Olaplex väripavelun yhteydessä"
          />
          <Content>
            <Text as="p" className="hintalistatext" content="Lyhyet hiukset" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="25€"
            />
          </Content>
          <Line color="#fff" width="100%" />
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
              content="30€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Pitkät hiukset" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="35"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Erittäin pitkät hiukset"
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

      {/* Ripset ja kulmat */}
      <Container>
        <Section>
          <Heading
            as="h1"
            className="hintalistaheading"
            content="Ripsienpidennys/ Ripsien Ja Kulmien Kestovärjäys Hinnasto"
          />

          {/* Section 1 */}
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Ripsienpidennys klassiset "
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="55€ / huolto 50€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Ripsienpidennys hybrid"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="60€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text as="p" className="hintalistatext" content="Volyymit 2D" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="60€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Ripsienhuolto volyymit 2D "
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="50€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text as="p" className="hintalistatext" content="Volyymit 3D  " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="70€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Ripsienhuolto volyymit 3D"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="65€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Uudet klassiset ripsienpidennykset + kulmien värjäys ja muotoilu"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="65€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Pidennysten poisto"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="20€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Kulmien värjäys ja muotoilu"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="25€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Ripset ja kulmat + muotoilu"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="30€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text as="p" className="hintalistatext" content="Ripsien värjäys" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="15€"
            />
          </Content>
          <Line color="#fff" width="100%" />
        </Section>
      </Container>

      {/* Jalkahoito */}
      <Container>
        <Section>
          <Heading
            as="h1"
            className="hintalistaheading"
            content="Jalkahoito Hinnasto"
          />

          {/* Section 1 */}

          <Content>
            <Text as="p" className="hintalistatext" content="Jalkahoito" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="50€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Luxus jalkahoito"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="60€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Jalkahoito geelilakalla"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="70€"
            />
          </Content>
          <Line color="#fff" width="100%" />
        </Section>
      </Container>

      {/* Kynnet */}
      <Container>
        <Section>
          <Heading
            as="h1"
            className="hintalistaheading"
            content="Kauniit ja kestävät kynnet! Hinnasto"
          />

          <Content>
            <Text as="p" className="hintalistatext" content="Geelikakkaus" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="40€"
            />
          </Content>

          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="Geelikynnet" />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="50€"
            />
          </Content>

          <Line color="#fff" width="100%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Manikyyri (sis. lakkauksen)"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="30€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Lux manikyyri (sis. lakkauksen + parafiininaamion)"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="40€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Kynsien leikkaus"
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="15€"
            />
          </Content>
        </Section>
      </Container>

      {/* Geelilakkaus Varpaisiin */}
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

      {/* Hieronta */}
      <Container>
        <Section>
          <Heading
            as="h2"
            className="hintalistaheading"
            content="Hieronta Hinnasto"
          />

          {/* Section 1 */}
          <Content>
            <Text as="p" className="hintalistatext" content="45 min." />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="40€"
            />
          </Content>
          <Line color="#fff" width="100%" />

          <Content>
            <Text as="p" className="hintalistatext" content="60 min. " />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="50€"
            />
          </Content>
          <Line color="#fff" width="100%" />
          <Content>
            <Text as="p" className="hintalistatext" content="80 min." />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="70€"
            />
          </Content>
          <Line color="#fff" width="100%" />
        </Section>
      </Container>

      {/* Kuumakivihieronta */}
      <Container>
        <Section>
          <Heading
            as="h1"
            className="hintalistaheading"
            content="Kuumakivihieronta Hinnasto"
          />

          {/* Section 1 */}
          <Content>
            <Text
              as="p"
              className="hintalistatext"
              content="Kuumakivihieronta 75 min."
            />
            <Text
              as="p"
              style={{ marginLeft: 'auto' }}
              className="hintalistatext"
              content="65€"
            />
          </Content>
          <Line color="#fff" width="100%" />
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Hintalista;
