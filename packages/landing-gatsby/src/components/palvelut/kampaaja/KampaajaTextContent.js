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
                src="./images/mgstudio_malminkartano_helsinki_kampaaja_hiusten_leikkaus.jpg"
                alt="Hiusten_leikkaus_ja_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
              ,
              <StaticImage
                src="./images/Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_hiusten_valkaisu.webp"
                alt="Hiusten_leikkaus_ja_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
              ,
              <StaticImage
                src="./images/Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_hiusten_valkaisu_leikkau_otsatukka.webp"
                alt="Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_hiusten_valkaisu_leikkau_otsatukka"
              />
              ,
              <StaticImage
                src="./images/Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_raidat.webp"
                alt="Hiusten_raidat_Hiusten_leikkaus_ja_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
            </Carousel>

            <Heading className="heading" as="h2" content="Vaalennukset" />

            <Text content="Hiusten vaalennus on kemiallinen prosessi, jossa hiusten väriä vaalennetaan. Vaalennuskäsittelyissä käytetään aina hapetetta. Vaalennus voidaan tehdä joko vaalennusvärillä, jolloin hiuksen omaa pigmenttiä värjätään vaaleammaksi tai ”valkaisemalla”, jolloin hiuksen pigmentti poistetaan kokonaan. Näistä kahdesta vaalennusvärjäys on hiukselle huomattavasti hellävaraisempi käsittely. Valkaisuvaalennuskäsittelyyn kannattaa aina lisätä sävytys eli taitto, joka korjaa hiusta ja poistaa vaaleata väristä ei-toivottua keltaisuutta." />

            <Text content="*Kylmän vaaleiden hiusten sävyn säilyttämiseksi ja ylläpitämiseksi tulee aina käyttää kotihoidossa tähän tarkoitettuja hopeashampoota ja -hoitoainetta. Ilman näitä tuotteita kylmän vaalea sävy tulee häviämään hiuksista ja hiusten sävy tulee taittamaan kylmästä lämpimään, yleensä kellertävään." />
            <Text content="Kylmän vaaleiden hiusten ylläpitohoito siihen tarkoitetuilla tuotteilla tulee aloittaa välittömästi värjäyksen jälkeen. Hiusta ei tule päästää ensin kellastumaan, sillä kerran menetetyn kylmän vaalean sävyn palauttaminen takaisin pelkillä kotihoituotuotteilla on lähes mahdotonta." />
          </Content1>

          {/* Second Column */}

          <Content2>
            <Heading className="heading" as="h2" content="Raidat" />
            <Text content="Hiusten raidoittaminen tarkoittaa suortuvien erottelua hiuksista ja niiden käsittelemistä hiusvärillä tai vaalennusaineella, jotta niistä tulee pohjaväriä tai luonnollista väriä vaaleammat tai tummemmat. Raidoilla voidaan saada aikaan ulottuvuutta luomalla kontrastia muihin hiuksiin. Hiusten raidoitus voidaan tehdä folioilla, hupulla tai erityisillä kammoilla tai siveltimillä, joilla väri ”maalataan” hiuksiin" />

            <Heading className="heading" as="h2" content="Tyviväri" />
            <Text content="Hius kasvaa juuresta, joten tyvikasvu on väistämätön. Tyvivärillä eli juurivärillä tarkoitetaan hiuksen omaa väriä, joka kasvaa tummempana tai vaaleampana, kuin hiusten pituuksiin laitettu väri. Tyvivärin raja on enintään 3 cm. Mikäli värjättävän tyven pituus on enemmän kuin 3 cm, ei kyseessä enää ole tyviväri vaan väri." />

            <Heading className="heading" as="h2" content="Sävytys" />
            <Text content="Sävytys on varsinaisen värin sävyttämistä eli taittamista viileään. Taitolla sävytetään lämpimät eli kultaiset eli keltaiset sävyt viileän vaaleiksi. Kylmät ja harmaat sävyt vaativat aina sävytyksen. Taitto on aina värikäsittelyn lisäpalvelu." />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
