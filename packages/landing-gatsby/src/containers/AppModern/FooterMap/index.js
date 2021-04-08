import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';

import SectionWrapper, { Section, Content1, Content2 } from './workHard.style';

const WorkHard = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading as="h2" content="MG Studio" />
            <Heading as="h3" content="TULE KÄYMÄÄN" />
            <Text content="Tuohiaukio 4, 00410, Helsinki, Malminkartano" />
            <Heading as="h3" content="SOITA MEILLE" />
            <Text content="(+358) 0400 9790 51" />
            <div>
              <a
                href="https://varaa.timma.fi/MGstudio"
                target="_blank"
                rel="noopener norefferer"
              >
                VARAA AIKA NETISSÄ
              </a>
            </div>
            <Text content="Teethän mahdolliset ajanvarauksen siirrot tai peruutukset mahdollisimman ajoissa, kuitenkin viimeistään 24 tuntia ennen varattua aikaa." />
            <Text
              style={{ fontWeight: 600, marginTop: '-1em' }}
              content="Myöhemmin peruutetuista tai peruuttamatta jätetyistä ajoista joudumme laskuttamaan 50% varatun palvelun hinnasta."
            />
          </Content1>

          <Content2>
            <Heading as="h2" content="Aukioloajat" />
            <Heading as="h3" content="MAANANTAI - PERJANTAI" />
            <Text content="10.00-18.00" />
            <Heading as="h3" content="LAUANTAI" />
            <Text content="Sopimuksen mukaan" />
            <Heading as="h3" content="MAANANTAI - PERJANTAI" />
            <Text content="Suljettu" />
            <Link to="/yhteystiedot">Yhteystiedot</Link>
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;
