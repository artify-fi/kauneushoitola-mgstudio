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
                src="./images/Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki.webp"
                alt="Ripsienpidennys_kulmien_muotoilu_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
              <StaticImage
                src="./images/Kauneushoitola-mgstudio-malminkartano-ripset-kulmat-volyymiripset.webp"
                alt="ripset-kulmat-volyymiripset-Kauneushoitola-mgstudio-malminkartano-myyrmaki-haaga-helsinki"
              />
            </Carousel>
            <Heading
              as="h2"
              content="Klassiset ripset, hybrid ja volyymiripset"
            />

            <Text content="Ripsien pidennyksillä saat luonnolliset tai tuuheat näyttävät ripset. Ripsien pidennyksillä  säästät kaunistautumiseen kuluvaa aikaa, silmät näyttävät tummemmilta ja näkyvämmiltä. Pidennysripsiä löytyy eri pituuksissa ja kaarevuuksissa jotka sopivat silmillesi ja ripsillesi. Ripsien pidennyksistä teemme klassisia, hybrid ja volyymejä, joista hybrid ja volyymit ovat näyttävämmät ja tuuheammat." />

            <Heading
              as="h3"
              content="Kuinka usein ripsien pidennyksiä tulee huoltaa?"
            />

            <Text content="Ripsien kasvuaika on normaalisti 60-90 päivää, sen jälkeen ripset tippuvat pois ja uudet ripset kasvavat tilalle. Suosittelemme ripsien pidennyksellesi huoltoa 2-4 viikon välein, jolloin täytetään kohdat, joista ripsiä on näkyvästi pudonnut ja uusia, riittävän pitkiä ripsiä on kasvanut, joihin uudet pidennykset voidaan taas liittää." />
          </Content1>

          <Content2>
            <Heading
              as="h3"
              content="Miten ripsien pidennyksiä tulisi hoitaa?"
            />

            <Text
              content="Päivittäinen pesu on ripsien pidennysten harjaaminen on ainut asia mitä tarvitsee tehdä säilyttääkseen ripset kauniina koko huoltovälin.



              2 tuntia ripsien laittamisen jälkeen - ripset eivät saa kastua.
              
              
              Kahden päivän kuluessa toimenpiteestä - älä höyrytä kasvoillesi tai käytä höyrysaunaa, älä ui tai pese kasvosi lämpimällä vedellä.
              
              
              Älä käytä ripsiväriä ripsien pidennyksissä, koska meikinpoistoaine vaikuttaa liiman tarttuvuuteen.  Älä hiero silmiäsi pestessäni kasvojani, kuivata aina ripset.
              "
            />

            <Heading as="h3" content="Kestovärjäys ripsiin ja kulmiin" />

            <Text
              content="..  
              Kestovärjäys helpottaa arkea ja nopeuttaa päivittäistä meikkausta ja on helppo tapa pitää yllä huoliteltua, mutta luonnollista lookia. Kestovärillä voidaan värjätä ripset, kulmat tai molemmat samalla kertaa."
            />

            <Heading as="h3" content="Kuinka kauan väri kestää?" />

            <Text
              content="Väri kestää karvassa yleensä 3-4 viikkoa jonka jälkeen se olisi hyvä uusia mikäli haluat ylläpitää lopputulosta. 
              "
            />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
