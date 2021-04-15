import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';

import SectionWrapper, { Section, Content1, Content2 } from './styleContent';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading as="h2" content="Vaalennukset" />

            <Text content="Hiusten vaalennus on kemiallinen prosessi, jossa hiusten väriä vaalennetaan. Vaalennuskäsittelyissä käytetään aina hapetetta. Vaalennus voidaan tehdä joko vaalennusvärillä, jolloin hiuksen omaa pigmenttiä värjätään vaaleammaksi tai ”valkaisemalla”, jolloin hiuksen pigmentti poistetaan kokonaan. Näistä kahdesta vaalennusvärjäys on hiukselle huomattavasti hellävaraisempi käsittely. Valkaisuvaalennuskäsittelyyn kannattaa aina lisätä sävytys eli taitto, joka korjaa hiusta ja poistaa vaaleata väristä ei-toivottua keltaisuutta." />
            <Text content="Kylmän vaaleiden hiusten sävyn säilyttämiseksi ja ylläpitämiseksi tulee aina käyttää kotihoidossa tähän tarkoitettuja hopeashampoota ja -hoitoainetta. Ilman näitä tuotteita kylmän vaalea sävy tulee häviämään hiuksista ja hiusten sävy tulee taittamaan kylmästä lämpimään, yleensä kellertävään." />
            <Text content="Kylmän vaaleiden hiusten ylläpitohoito siihen tarkoitetuilla tuotteilla tulee aloittaa välittömästi värjäyksen jälkeen. Hiusta ei tule päästää ensin kellastumaan, sillä kerran menetetyn kylmän vaalean sävyn palauttaminen takaisin pelkillä kotihoituotuotteilla on lähes mahdotonta." />
            <Text content="Kasviväreillä tai hennalla värjättyjä hiuksia emme lähde vaalentamaan lainkaan." />

            <Heading as="h2" content="Raidat" />

            <Text content="Hiusten raidoittaminen tarkoittaa suortuvien erottelua hiuksista ja niiden käsittelemistä hiusvärillä tai vaalennusaineella, jotta niistä tulee pohjaväriä tai luonnollista väriä vaaleammat tai tummemmat. Raidoilla voidaan saada aikaan ulottuvuutta luomalla kontrastia muihin hiuksiin. Hiusten raidoitus voidaan tehdä folioilla, hupulla tai erityisillä kammoilla tai siveltimillä, joilla väri ”maalataan” hiuksiin" />

            <Heading as="h2" content="Tyviväri" />

            <Text content="Hius kasvaa juuresta, joten tyvikasvu on väistämätön. Tyvivärillä eli juurivärillä tarkoitetaan hiuksen omaa väriä, joka kasvaa tummempana tai vaaleampana, kuin hiusten pituuksiin laitettu väri. Tyvivärin raja on enintään 3 cm. Mikäli värjättävän tyven pituus on enemmän kuin 3 cm, ei kyseessä enää ole tyviväri vaan väri." />

            <Heading as="h2" content="Sävytys eli taitto" />

            <Text content=" Sävytys eli taitto tarkoittaa varsinaisen värin sävyttämistä eli taittamista viileään. Taitolla sävytetään lämpimät eli kultaiset eli keltaiset sävyt viileän vaaleiksi. Kylmät ja harmaat sävyt vaativat aina sävytyksen. Taitto on aina värikäsittelyn lisäpalvelu." />
          </Content1>
          <Content2></Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
