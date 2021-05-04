import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Img from 'common/src/components/Image';
import facebook from '../../../images/Facebook.png';
import instagram from '../../../images/Instagram.jpg';

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import 'react-sharingbuttons/dist/main.css';

import PhoneButton from '../../../components/logo/PhoneButton';
import CalendarButton from '../../../components/logo/CalendarButton';
import CardButton from '../../../components/logo/CardButton';

import SectionWrapper, { Section, Content1, Content2 } from './footerMap';

const Footer = () => {
  const url = 'https://www.mgstudio.fi/';
  const shareText = 'Tarkista tämä kauneussalonki!';
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Text id="footer" style={{ marginBottom: '5em' }} content="" />
            <Heading className="mgstudio" as="h2" content="MG Studio" />

            <div
              classNam="margin"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <a
                href="https://www.google.com/maps/place/MG+Studio/@60.2513955,24.8557821,17z/data=!3m1!4b1!4m5!3m4!1s0x468df777bbe4bfff:0x958876d046430823!8m2!3d60.2513955!4d24.8579761"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                <CardButton />
              </a>

              <a
                href="https://www.google.com/maps/place/MG+Studio/@60.2513955,24.8557821,17z/data=!3m1!4b1!4m5!3m4!1s0x468df777bbe4bfff:0x958876d046430823!8m2!3d60.2513955!4d24.8579761"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                <Heading
                  style={{
                    display: 'flex',
                    textAlign: 'start',
                    paddingLeft: '1.2em',
                    paddingTop: '0px',
                  }}
                  as="h3"
                  content="Tuohiaukio 4, 00410, Helsinki, Malminkartano"
                />
              </a>
            </div>

            {/* Ajanvaraus soittaminen */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '1em',
              }}
            >
              <a href="tel:+358400979051">
                {' '}
                <PhoneButton />
              </a>
              <a href="tel:+358400979051">
                {' '}
                <Heading
                  style={{
                    marginLeft: '1em',
                    marginTop: '0.6em',
                  }}
                  as="h3"
                  content="	Soita ja varaa aika"
                />
              </a>
            </div>
            <Text
              style={{
                fontWeight: '700',
                display: 'flex',
                justifyContent: 'flex-start',
                textAlign: 'left',
                marginTop: '1em',
              }}
              content="(+358) 0400 9790 51"
            />
            <Text
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
              content="Teethän mahdolliset ajanvarauksen siirrot tai peruutukset mahdollisimman ajoissa, kuitenkin viimeistään 24 tuntia ennen varattua aikaa."
            />
            <Text
              style={{
                fontWeight: '700',
                display: 'flex',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
              content="Myöhemmin peruutetuista tai peruuttamatta jätetyistä ajoista joudumme laskuttamaan 50% varatun palvelun hinnasta."
            />

            {/* Ajanvaraus kalenteri */}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <a
                href="https://varaa.timma.fi/MGstudio"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                <CalendarButton />
              </a>
              <a
                href="https://varaa.timma.fi/MGstudio"
                target="_blank"
                rel="noopener norefferer"
                className="link"
              >
                {' '}
                <Heading
                  style={{
                    marginLeft: '1em',
                    marginTop: '0.6em',
                  }}
                  as="h3"
                  content="Nettiajanvaraus"
                />
              </a>
            </div>
            <Text
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
              content="Varaa aikasi vaivattomasti 24/7 nettiajanvarauksesta.
                Jos et löydä mieleistäsi aikaa, soita meille!"
            />

            {/* Social Media */}
            <Text
              style={{
                paddingTop: '14px',
                fontWeight: '600',
                color: '#000',
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
            <Heading className="aukioloajat" as="h2" content="Aukioloajat" />
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
                <Img
                  alt="facebook mg studio finland"
                  className="facebook"
                  src={facebook}
                />
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
                <Img
                  alt="instagram mg studio finland"
                  className="instagram"
                  src={instagram}
                />
                Instagram MG Studio
              </a>
            </div>
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
