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
                src="./images/kynsien-geelilakkaus-kauneushoitola-mgstudio-malminkartano-helsinki.jpeg"
                alt="Geelilakkaus-manikyyri-kauneushoitola-malminkartano"
              />
              ,
              <StaticImage
                src="./images/Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_Geelilakkaus_Luxusmanikyyri_kynsien_leikkaus.webp"
                alt="Geelilakkaus_Luxusmanikyyri_kynsien_leikkaus_Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga"
              />
              ,
              <StaticImage
                src="./images/Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_Geelilakkaus_Manikyyri_kynsien_lakkaus_parafiininaamio.webp"
                alt="Geelilakkaus_Manikyyri_kynsien_lakkaus_parafiininaamio_Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga"
              />
              ,
              <StaticImage
                src="./images/Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_Geelilakkaus_Manikyyri.webp"
                alt="Geelilakkaus_Manikyyri_Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga"
              />
              ,
              <StaticImage
                src="./images/kynsien-lakkaus-mgstudio-myyrmäki-malminkartano.jpeg"
                alt="kynsien-geelilakkaus-Manikyyri-Kauneushoitola-MG-Studio-Malminkartano-Helsinki"
              />
              ,
            </Carousel>
            <Heading
              className="heading"
              as="h2"
              content="Kauniit ja kestävät kynnet viikoiksi"
            />
            <Text content="Geelilakkaus on ohut led-valolla kovetettava kestolakkaus, jonka kesto on huomattavasti parempi tavalliseen kynsilakkaan verrattuna. Kaunis tulos kestää 2-3 viikkoa, minkä jälkeen kynsien kasvu on jo liian havaittavissa. Geelilakkaus on suttaantumaton välittömästi lakkauksen jälkeen." />

            <Heading
              className="heading"
              as="h2"
              content="Miten geelilakkaus poistetaan?"
            />
            <Text content="Geelilakkaus poistetaan viilaamalla käsi- tai sähköviilalla. Geelilakkausta ei ole tarkoitettu poistettavaksi itse kotona." />

            {/* 
            <Image
              className="img"
              src={PersonImage3}
              alt="kaunis nainen kynnet kauniilla ranskalaisella manikyyrillä halvalla malminkartano ja myyrmaki seka helsinki"
            /> */}
          </Content1>

          {/* Second Column */}

          <Content2>
            <Heading className="heading" as="h2" content="Manikyyri" />
            <Text content="Käsistä ja kynsistä huolehtiminen on tärkeää siistin ja huolitellun olemuksen saavuttamiseksi. " />

            <Heading className="heading" as="h2" content="Manikyyri sisältä" />
            <Text content="*käsien kylvetys" />
            <Text content="*kynsinauhojen siistiminen" />
            <Text content="*kynsien leikkaus/viilaus" />
            <Text content="*kynsien lakkaus" />
            <Text content="*Käsivoide, kynsiöljy" />

            <Heading
              className="heading"
              as="h2"
              content="Lux manikyyri sisältä"
            />

            <Text content="*käsien kylvetys" />
            <Text content="*kynsinauhojen siistiminen" />
            <Text content="*kynsien leikkaus/viilaus" />
            <Text content="*kynsien lakkaus" />
            <Text content="*Parafiininaamio" />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
