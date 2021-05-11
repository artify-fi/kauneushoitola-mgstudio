import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import SectionWrapper, { Section, Content1, Content2 } from './styleContent';
// import Image from 'common/src/components/Image';

// import PersonImage2 from './images/close-up-woman-receiving-pedicure-with-nail-file-her-toenails-by-manicure-master-nail-salon.jpg';
// import PersonImage1 from './images/treatment-product-female-feet-hand-spa.webp';
// import PersonImage3 from './images/loves-polishes-nails-with-file-large.webp';
// import PersonImage4 from './images/polish-by-brush-wearing-white-gloves.webp';
// import PersonImage5 from './images/pedicure-master-gloves-polishes-nails-with-file.jpg';
// import PersonImage6 from './images/manicure-master-is-painting-female-toenails-with-maroon-nail-polish-by-brush-wearing-white-gloves.jpg';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
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
