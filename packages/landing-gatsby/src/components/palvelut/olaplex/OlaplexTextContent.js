import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';

import SectionWrapper, { Section, Content1, Content2 } from './styleContent';
import PersonImage1 from './images/olaplex-blond-hair.webp';
// import PersonImage2 from './images/olaplex-blond-slihghtly-yellow-hair.webp';
// import PersonImage3 from './images/very-sexy-woman-show-her-natural-look.webp';
// import PersonImage4 from './images/woman-red-dress-dark-hair.webp';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Image
              className="img"
              src={PersonImage1}
              alt="blondi nainen kayttaa olaplex kauneussalonki malminkartano"
            />
            <Heading
              as="h2"
              content="Olaplex – Ei enää ikinä vahingoittuneita hiuksia"
            />

            <Text content="Olaplex-käsittelyt takaavat, että hiuksesi eivät enää koskaan mene huonoon kuntoon niitä vaalennettaessa, värjättäessä tai tehtäessä rakennekäsittelyjä. Takaamme että käyttäessäsi Olaplex-palveluitamme hiuksesi ovat huomattavasti paremmassa kunnossa kuin ennen käsittelyä." />
            <Text content="Olaplex on Yhdysvalloissa vuonna 2014 kehitetty aine. Se ehkäisee hiusten kuitukerroksessa olevia rikkisiltoja vaurioitumasta sekä korjaa jo vaurioituneet rikkisillat, sekä vahvistaa hiuksen liitoksia palauttaen hiuksen alkuperäiseen rakenteeseensa. Tämä teknologia on hiustenkäsittelyn mullistava uutuus ja mitään vastaavaa ei koskaan aikaisemmin ole pystytty kehittämään. " />
            <Text content="Lopputulos on välittömästi nähtävissä ja käsin kosketeltavissa. Olaplexissä parasta on se, että se ei vain väliaikaisesti täytä vaurioituneiden hiussuomujen välejä, vaan rakentaa rikkisillat uudelleen, joten tulos on pysyvä." />

            <Heading as="h2" content="Miten se toimii?" />
            {/* <Image
              className="img"
              src={PersonImage2}
              alt="olaplex kylmän vaaleat hiusten hoito blondi nainen kauneussalonki malminkartano helsinki"
            /> */}
            <Text content="Olaplex-käsittely on kolmivaiheinen prosessi. Ensimmäisessä vaiheessa vaalennus- / väriaineeseen sekoitetaan Olaplex Bond Multiplier -ainesosa. Tämä ehkäisee käsittelyssä normaalisti tapahtuvaa hiusten kuitukerroksen rikkisiltojen hajoamista. Samalla Olaplex-molekyylit aloittavat jo hajonneiden rikkisiltojen uudelleen rakentamisen. Värikäsittelyn jälkeen hiukset hoidetaan Olaplex Bond Perfector -aineella, joka sitoo hiuksissa olevat rikkisillat vahvasti kiinni toisiinsa." />
            <Text content="Käsittely jatkuu kotona kerran viikossa hiusten pesun yhteydessä käytettävällä Olaplex Hair Perfector -aineella. Kotituote ei ole välttämätön, mutta suosittelemme vahvasti sen käyttöä etenkin, mikäli hiuksia käsitellään usein muotoiluraudalla, föönillä, tms. lämpölaitteella tai voimakkaasti harjaten. Kotihoitotuote ehkäisee vaurioiden syntymistä ja korjaa jo syntyneitä vaurioita päivittäisestä hiuksiin kohdistuvasta rasituksesta." />
          </Content1>

          {/* Section Content 2 */}

          <Content2>
            <Heading as="h2" content="Olaplex vaalennus- ja värikäsittely" />
            {/* <Image
              className="img"
              src={PersonImage3}
              alt="nainen vaaleat hiukset saa olaplex hoitoa kauneussalonkissa ja malminkartano helsinki martinlaakso vantaa"
            /> */}
            <Text content="Mikäli olet harkinnut hiusten vaalentamista, suosittelemme ehdottomasti sen tehtävän Olaplex-käsittelynä. Vaalentaminen on hiuksia eniten rasittava toimenpide, joka jättää hiukset usein kuiviksi ja karheiksi. Voit unohtaa kuivuuden ja karheuden, kun vaalennus toteutetaan Olaplex-käsittelynä. " />
            <Text content="Olaplex-käsittelynä. Olaplexin avulla pystymme myös vaalentamaan hiuksiasi todella paljon enemmän kuin perinteisellä vaalennusmenetelmällä pelkäämättä hiusten vaurioitumista. Nyt sinun on siis mahdollista toteuttaa unelmiesi ombré, pastelli tai blondi säilyttäen hiukset hyvässä kunnossa." />

            <Heading as="h2" content="Värikäsittely" />
            {/* <Image
              className="img"
              src={PersonImage4}
              alt="nainen tummat raidotetut hiukset myyrmaki vantaa kauneushoitola"
            /> */}
            <Text content="Värikäsittelyt Olaplexilla lisäävät huomattavasti hiusten kiiltoa ja värien intensiivisyyttä ja täyteläisyyttä. Mikäli värikäsittelyt ovat aiemmin aiheuttaneet hiuksiisi kuivuutta tai karheutta, suosittelemme ehdottomasti värikäsittelyt tehtäväksi Olaplexilla." />
            <Text content="" />
            <Text content="" />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
