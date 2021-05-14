import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from '../../../components/carousel/Carousel';

import SectionWrapper, { Section, Content1, Content2 } from './styleContent';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading as="h2" content="Kauniit ja kestävät kynnet kuukausiksi" />

            <Carousel>
              <StaticImage
                src="./images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_kauniit_jalat_meiltä.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_kauniit_jalat_meiltä"
              />
              ,
              <StaticImage
                src="./images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_jalatallat.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Myyrmäki_Kannelmäki_jalatallat_kaikille_kesäkuntoon"
              />
              ,
              <StaticImage
                src="./images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_naisille.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_naisille"
              />
              ,
              <StaticImage
                src="./images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_punaiset_geelikynnet.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_punaiset_geelikynnet"
              />
              ,
              <StaticImage
                src="./images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_vanhoilli_ihmisille.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_vanhoilli_ihmisille_kesäksi"
              />
              ,
            </Carousel>
            <Text content="Geelilakkaus on ohut led-valolla kovetettava kestolakkaus, jonka kesto on huomattavasti parempi tavalliseen kynsilakkaan verrattuna. Geelilakkaus kestää varpaissa parhaimmillaan kuukausia lohkeilematta ja geelilakka vain kasvaa ulos. Geelilakka sopii niille, jotka haluavat kauniin, kiiltävän, pitkäikäisen ja luonnollisen tuloksen." />
          </Content1>

          <Content2>
            <Heading as="h2" content="Miten geelilakkaus poistetaan?" />
            <Text content="Geelilakkaus poistetaan viilaamalla käsi- tai sähköviilalla. Geelilakkausta ei ole tarkoitettu poistettavaksi itse kotona." />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
