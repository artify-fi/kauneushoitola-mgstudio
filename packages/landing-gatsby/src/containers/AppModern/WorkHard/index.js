import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import List from 'common/src/components/List';
import Link from 'common/src/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './workHard.style';
// import data from 'common/src/data/AgencyModern';
import illustration from 'common/src/assets/image/agencyModern/work-hard-illustration.png';
// import Tick from 'common/src/assets/image/agencyModern/tick-circle.svg';

const WorkHard = () => {
  const Data = useStaticQuery(graphql`
    query {
      Tick: file(relativePath: { eq: "image/agencyModern/tick-circle.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      agencyModernJson {
        workHardList {
          id
          title
        }
      }
    }
  `);

  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content>
            <Heading
              as="h2"
              content="Don’t work hard, be smart &amp; work smartly. Take relax sit"
            />
            <Text content="Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever." />
            <ListGroup>
              {Data.agencyModernJson.workHardList.map((item) => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={
                    <Image
                      fluid={
                        (Data.Tick !== null) | undefined
                          ? Data.Tick.childImageSharp.fluid
                          : {}
                      }
                      src={Data.Tick.childImageSharp.fluid.src}
                      objectFit="contain"
                      alt="Tick Icon"
                    />
                  }
                />
              ))}
            </ListGroup>
            <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link>
          </Content>
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
} from './workHard.style';

const WorkHard = () => {
  const Data = useStaticQuery(graphql`
    query {
      Tick: file(
        relativePath: { eq: "image/agencyModern/mg-studio-logo-large.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      agencyModernJson {
        workHardList {
          id
          title
        }
      }
    }
  `);

  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content style={{ marginTop: '-14em' }}>
            <Heading as="h2" content="MG Studio &amp; Aukioloajat" />
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
            <Heading as="h3" content="MAANANTAI - PERJANTAI" />
            <Text content="10.00-18.00" />

            <Heading as="h3" content="LAUANTAI" />
            <Text content="Sopimuksen mukaan" />

            <Heading as="h3" content="MAANANTAI - PERJANTAI" />
            <Text content="Suljettu" />
            <Link to="/yhteystiedot">Yhteystiedot</Link>
          </Content>
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;
