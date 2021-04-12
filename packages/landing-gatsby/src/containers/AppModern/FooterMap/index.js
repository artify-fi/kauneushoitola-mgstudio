import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Img from 'common/src/components/Image';
import phone from '../../../images/Phone.jpg';
import facebook from '../../../images/Facebook.png';
import instagram from '../../../images/Instagram.jpg';

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import 'react-sharingbuttons/dist/main.css';

import SectionWrapper, { Section, Content1, Content2 } from './footerMap';

const WorkHard = () => {
  const url = 'https://www.mgstudio.fi/';
  const shareText = 'Tarkista tämä kauneussalonki!';
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Text id="footer" style={{ marginBottom: '5em' }} content="" />
            <Heading as="h2" content="MG Studio" />
            <Heading id="footer" as="h3" content="TULE KÄYMÄÄN" />
            <Text content="Tuohiaukio 4, 00410, Helsinki, Malminkartano" />
            <Heading as="h3" content="SOITA MEILLE" />
            <Text content="(+358) 0400 9790 51" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="tel:+358400979051">
                {' '}
                <Img className="phone" src={phone} />
              </a>
            </div>

            <div>
              <a
                href="https://varaa.timma.fi/MGstudio"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                VARAA AIKA NETISSÄ
              </a>
            </div>
            <Text content="Teethän mahdolliset ajanvarauksen siirrot tai peruutukset mahdollisimman ajoissa, kuitenkin viimeistään 24 tuntia ennen varattua aikaa." />
            <Text
              style={{ fontWeight: 600, marginTop: '-1em' }}
              content="Myöhemmin peruutetuista tai peruuttamatta jätetyistä ajoista joudumme laskuttamaan 50% varatun palvelun hinnasta."
            />
            <Text
              style={{
                paddingTop: '14px',
                fontWeight: '600',
                color: '#ff3f66',
              }}
              content="Suosittele meitä"
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Facebook url={url} />
              <Twitter url={url} shareText={shareText} />
            </div>
          </Content1>

          <Content2>
            <Heading
              style={{ marginTop: '2.2em' }}
              as="h2"
              content="Aukioloajat"
            />
            <Heading as="h3" content="MAANANTAI - PERJANTAI" />
            <Text style={{ fontWeight: 600 }} content="10.00-18.00" />
            <Heading as="h3" content="LAUANTAI" />
            <Text style={{ fontWeight: 600 }} content="Sopimuksen mukaan" />
            <Heading as="h3" content="SUNNUNTAI" />
            <Text
              style={{ marginBottom: '2em', fontWeight: 600 }}
              content="Suljettu"
            />
            <Text content="Seuraa meitä facebookissa" />
            <div>
              <a
                href="https://facebook.com/MGstudioFinland"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                <Img className="facebook" src={facebook} />
                Facebook MG Studio
              </a>
            </div>
            <Text content="Seuraa meitä Instagramissa" />

            <div>
              <a
                href="https://instagram.com/MGstudioFinland"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                <Img className="instagram" src={instagram} />
                Instagram MG Studio
              </a>
            </div>
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;
