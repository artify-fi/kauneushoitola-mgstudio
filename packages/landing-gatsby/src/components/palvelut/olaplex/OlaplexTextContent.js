import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';

import SectionWrapper, { Section, Content1, Content2 } from './footerMap';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading
              as="h1"
              content="Olaplex – Ei enää koskaan vaurioituneita hiuksia"
            />

            <Text content="Olaplex-käsittelyt takaavat, että hiuksesi eivät enää koskaan mene huonoon kuntoon niitä vaalennettaessa, värjättäessä tai tehtäessä rakennekäsittelyjä. Takaamme että käyttäessäsi Olaplex-palveluitamme hiuksesi ovat huomattavasti paremmassa kunnossa kuin ennen käsittelyä." />
            <Text content="Olaplex on Yhdysvalloissa vuonna 2014 kehitetty aine. Se ehkäisee hiusten kuitukerroksessa olevia rikkisiltoja vaurioitumasta sekä korjaa jo vaurioituneet rikkisillat, sekä vahvistaa hiuksen liitoksia palauttaen hiuksen alkuperäiseen rakenteeseensa. Tämä teknologia on hiustenkäsittelyn mullistava uutuus ja mitään vastaavaa ei koskaan aikaisemmin ole pystytty kehittämään. Lopputulos on välittömästi nähtävissä ja käsin kosketeltavissa. Olaplexissä parasta on se, että se ei vain väliaikaisesti täytä vaurioituneiden hiussuomujen välejä, vaan rakentaa rikkisillat uudelleen, joten tulos on pysyvä." />
            <Heading as="h2" content="Miten se toimii?" />

            <Text content="Olaplex-käsittely on kolmivaiheinen prosessi. Ensimmäisessä vaiheessa vaalennus- / väriaineeseen sekoitetaan Olaplex Bond Multiplier -ainesosa. Tämä ehkäisee käsittelyssä normaalisti tapahtuvaa hiusten kuitukerroksen rikkisiltojen hajoamista. Samalla Olaplex-molekyylit aloittavat jo hajonneiden rikkisiltojen uudelleen rakentamisen. Värikäsittelyn jälkeen hiukset hoidetaan Olaplex Bond Perfector -aineella, joka sitoo hiuksissa olevat rikkisillat vahvasti kiinni toisiinsa." />
            <Text content="Käsittely jatkuu kotona kerran viikossa hiusten pesun yhteydessä käytettävällä Olaplex Hair Perfector -aineella. Kotituote ei ole välttämätön, mutta suosittelemme vahvasti sen käyttöä etenkin, mikäli hiuksia käsitellään usein muotoiluraudalla, föönillä, tms. lämpölaitteella tai voimakkaasti harjaten. Kotihoitotuote ehkäisee vaurioiden syntymistä ja korjaa jo syntyneitä vaurioita päivittäisestä hiuksiin kohdistuvasta rasituksesta." />
            <Heading as="h2" content="Olaplex vaalennus- ja värikäsittely." />

            <Text content="Mikäli olet harkinnut hiusten vaalentamista, suosittelemme ehdottomasti sen tehtävän Olaplex-käsittelynä. Vaalentaminen on hiuksia eniten rasittava toimenpide, joka jättää hiukset usein kuiviksi ja karheiksi. Voit unohtaa kuivuuden ja karheuden, kun vaalennus toteutetaan Olaplex-käsittelynä. Olaplexin avulla pystymme myös vaalentamaan hiuksiasi todella paljon enemmän kuin perinteisellä vaalennusmenetelmällä pelkäämättä hiusten vaurioitumista." />
            <Text
              content=" Nyt sinun on siis mahdollista toteuttaa unelmiesi ombré, pastelli tai blondi säilyttäen hiukset hyvässä kunnossa.
              Värikäsittelyt Olaplexilla lisäävät huomattavasti hiusten kiiltoa ja värien intensiivisyyttä ja täyteläisyyttä. Mikäli värikäsittelyt ovat aiemmin aiheuttaneet hiuksiisi kuivuutta tai karheutta, suosittelemme ehdottomasti värikäsittelyt tehtäväksi Olaplexilla."
            />
          </Content1>
          <Content2></Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
