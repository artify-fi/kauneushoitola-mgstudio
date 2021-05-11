import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
// import Image from 'common/src/components/Image';

// import PersonImage1 from './images/beautician-applying-nail-polish.webp';
// import PersonImage2 from './images/beautiful-perfect-female-skin-legs-feet-top-view-with-tropical-flowers-green-palm-leaf-banner.webp';
// import PersonImage3 from './images/beautiful-woman-s-feet-with-green-nails.webp';
// import PersonImage4 from './images/beautiful-womans-legs-with-summer-nail-design-yellow-fabric.webp';
// import PersonImage5 from './images/manicure-pedicure-beauty-salon-concept-womans-feet-white-background.webp';
// import PersonImage6 from './images/womans-feet-hands-gray-beautiful-summer-red-nail-design.webp';

import SectionWrapper, { Section, Content1, Content2 } from './styleContent';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading as="h2" content="Kauniit ja kestävät kynnet kuukausiksi" />

            <Text content="Geelilakkaus on ohut led-valolla kovetettava kestolakkaus, jonka kesto on huomattavasti parempi tavalliseen kynsilakkaan verrattuna. Geelilakkaus kestää varpaissa parhaimmillaan kuukausia lohkeilematta ja geelilakka vain kasvaa ulos. Geelilakka sopii niille, jotka haluavat kauniin, kiiltävän, pitkäikäisen ja luonnollisen tuloksen." />

            {/* <Image
              className="img"
              src={PersonImage2}
              alt="kaunis täydellinen nainen saa iholle ja jaloille manikyyria ja geelilakkaust varpaille kauneussalonki malminkartano vantaan vieressä"
            /> */}
          </Content1>

          <Content2>
            <Heading as="h2" content="Miten geelilakkaus poistetaan?" />
            <Text content="Geelilakkaus poistetaan viilaamalla käsi- tai sähköviilalla. Geelilakkausta ei ole tarkoitettu poistettavaksi itse kotona." />

            {/* <Image
              className="img"
              src={PersonImage5}
              alt="manikyyri ja pedikyyri kauneussalonkisa käsitleminen naiset jalat geelilakalla helsinkin kauneus hoitolassa"
            /> */}
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
