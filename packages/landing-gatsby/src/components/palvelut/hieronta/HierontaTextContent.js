import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import SectionWrapper, { Section, Content1, Content2 } from './styleContent';
// import Image from 'common/src/components/Image';

// import PersonImage1 from './images/beautiful-younwoman-lying-down-spa-salon-skin-body-care-relaxation-massage-cosmetology-concept.webp';
// import PersonImage2 from './images/beauty-spa-woman-back-massage-1.webp';
// import PersonImage3 from './images/beauty-spa-woman-back-massage-2.webp';
// import PersonImage4 from './images/masseur-give-wellness-back-massage-client-spa-center.webp';
// import PersonImage5 from './images/woman-spa-is-being-massaged-by-masseur-classic-relaxing-relaxing-massages-beauty-salon.webp';
// import PersonImage6 from './images/young-woman-having-hot-stone-massage-therapy-1.webp';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading as="h2" content="Hieronnasta apua kehon kiputiloihin" />

            <Text content="Hieronta on perinteinen, kaikenikäisille soveltuva pehmytkudoksien hoitomuoto, jonka tavoitteena on lisätä kudosten aineenvaihduntaa ja parantaa verenkiertoa. Hieronta antaa hyvän olon, vähentää stressiä ja ennaltaehkäisee erilaisia vaivoja." />

            <Text content="Hierontaan tulon syynä ovat usein mm. erilaiset lihaskireydet, jäykkyydet ja akuutit tai krooniset kivut, stressi, rentoutuminen, palautuminen tai urheilijan lihashuolto. Yleistä on myös krooninen kipu, jossa syy voi olla muualla kuin lihaksistossa, mutta kipu aiheuttaa lihaskireyttä ja aineenvaihdunnan heikentymistä alueella.  " />

            <Heading as="h2" content="Hieronnan hyödyt:" />

            <Text content="*Kipu lievittyy" />
            <Text content="*Aineenvaihdunta tehostuu" />
            <Text content="*Ihon joustavuus paranee" />
            <Text content="*Palauttaa harjoittelusta" />
            <Text content="*Stressi vähenee" />
            <Text content="*Keho rentoutuu" />
            <Text content="*Mieli virkistyy" />
          </Content1>

          <Content2>
            <Heading as="h2" content="Esteet hieronnalle:" />

            <Text content="*Flunssa, influenssa" />
            <Text content="*Keuhkoinfektiot kuten keuhkokuume, tuberkuloosi" />
            <Text content="*Sairaalainfektiot" />
            <Text content="*Kaikki rokotet" />
            <Text content="*Kaikki vatsataudit" />

            <Heading
              as="h2"
              content="Muita mahdollisia esteitä hieronnalle ovat:"
            />

            <Text content="*Laskimotukos" />
            <Text content="*Sydänsairaus" />
            <Text content="*Verenpaine" />
            <Text content="*Syöpä (kasvainsairauksissa hoidosta tulee keskustella lääkärin kanssa ennen hoitoa)" />
            <Text content="*Verenvuototauti" />
            <Text content="*Diabetes" />
            <Text content="*Astma" />
            <Text content="*Epilepsia" />
            <Text content="*Osteoporoosi" />
            <Text content="*Ihottuma / ihosairaus hoidettavalla alueella" />
            <Text content="*Jokin muu elämääsi rajoittava sairaus, kerrothan siitä hierojallesi!" />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
