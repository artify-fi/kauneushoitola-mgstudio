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
            <Heading
              as="h2"
              content="Pedikyyrillä jalat kuntoon ja kauniiksi"
            />

            <Text content="Muistathan hoitaa jalkojasi. Ne kantavat ja liikuttavat sinua joka päivä!" />
            <Text content="Perusjalkahoitoomme sisältyy aina jalkakylpy, jalkahoidon hoidollinen osuus, johon kuuluvat tarpeen mukaan kynsien, kynsinauhojen, kovettumien käsittely. Jalkahoidon lopuksi jalkoihin levitetään hoitovoide. Perusjalkahoitoa voidaan täydentää toivotuilla lisäpalveluilla, luxus jalkahoito parafiininaamiolla, kynsien geelilakkauksella." />
          </Content1>

          <Content2>
            <Heading as="h2" content="Jalkahoito" />
            <Text content="Jalkakylpy, jalkojen hoitaminen (kynnet, kynsinauhat, kovettumat), kevyt hieronta ja kynsien lakkaus (tavallisella kynsilakalla)" />

            <Heading as="h2" content="Luxus-jalkahoito" />
            <Text content="Jalkakylpy, jalkojen hoitaminen (kynnet, kynsinauhat, kovettumat), kevyt hieronta, parafiininaamio ja kynsien lakkaus (tavallisella kynsilakalla)" />

            <Heading as="h2" content="Jalkahoito geelilakalla" />
            <Text content="Jalkakylpy, jalkojen hoitaminen (kynnet, kynsinauhat, kovettumat), kevyt hieronta ja kynsien geelilakkaus " />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
