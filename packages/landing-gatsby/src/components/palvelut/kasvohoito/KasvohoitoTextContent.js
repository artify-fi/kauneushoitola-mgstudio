import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
//import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import SectionWrapper, { Section, Content1, Content2 } from './styleContent';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            {/* <Heading as="h2" content="Kasvohoito (tulossa)" /> */}

            {/* <Text content="Hieronta, jalkakylpy ja kynsien lakkaus (perus kynsilakalla)" />

            <Heading as="h2" content="Luxus-jalkahoito" />
            <Text content="Hieronta, jalkakylpy, jalkojen hoitaminen (kynnet, kynsinauhat, kovettumien poisto) ja kynsien lakkaus (perus kynsilakalla) sekä parafiininaamio" />

            <Heading as="h2" content="Jalkahoito geelilakalla " />
            <Text content="Hieronta ,jalkakylpy, jalkojen hoitaminen  (kynnet, kynsinauhat, kovettumien poisto) ja kynsien geelilakkaus " />

            <Image
              className="img"
              src={PersonImage2}
              alt="kauneushoitola kylpylä rentoutuva hoito jalat käsi luksusta ja hemmmottelua helsinki martinlaakso ja malminkartano seka myyrmaki."
            />
            <Heading as="h2" content="Mikä on pedikyyri?" />
            <Image
              className="img"
              src={PersonImage3}
              alt="kauneushoitola malminkartanossa asiakas rakastaa kynsien kiillottamista suurella ja laadukkalla viilalla malminkartanolla ja helsinkissa."
            />
            <Text
              content="Pedikyyri on jalkojen kauneushoito. Korot, pohjat, varpaat ja varpaankynnet hoidetaan pedikyyrilla. Tavallisen pedikyyrin lisäksi voit valita myös pedikyyri, jossa on geeli- tai kynsilakapalvelu.
                Jalkahoidon aikana jalat kylpetään vedessä, jalat hierotaan, kynsinauhat ja kynnet puhdistetaan ja hoito saatetaan usein päätökseen kevyellä hieronnalla. Pedikyyri käyttää erityisiä jalkojen hoitotuotteita. Jalkojen lopussa jalat ovat puhtaat, kiiltävät ja sileät!"
            /> */}
          </Content1>
          {/* 
          <Content2>
            <Heading as="h2" content="Hoitopedikyyri" />
            <Image
              className="img"
              src={PersonImage4}
              alt="asiantuntija kiillota harjalla jalkojen kynsia valkoiset käsineet päällä malminkartanon kauneushoitolassa."
            />
            <Text
              content="Hoitopedikyyri ja esteettinen tai kauneudenhoito ovat erikseen. Hoitopedikyyri keskittyy ongelmallisten jalkojen kuten kasvaneiden kynsien, jalkasienen jne. Hoitoon. Kauneuspedikyyri on suunniteltu terveille jaloille. Omassa salongissamme teemme vain kauneudenhoitoja.
              Jalkahoidossa kauneuspalvelut eivät voi eikä saa diagnosoida tai hoitaa. Tarvittaessa ohjaamme sinut oikean asiantuntijan luokse."
            />

            <Heading as="h2" content="Kesä ja pedikyyri" />
            <Image
              className="img"
              src={PersonImage5}
              alt="pedikyyri jaloille päällikäsineet kiillotusaineet ja kynnet laadukalla viilalla martinlaakso ja helsinki"
            />
            <Text
              content="Olemme huomanneet, että kun kevät on lähestymässä ja aurinko paistaa, ihmiset alkavat heti varata pedikyyri-aikoja. Jokaisen lämpimämmän sään myötä varauksia on enemmän ja enemmän.
              Siten pedikyyri kausi alkaa ensimmäisellä lämpimällä säällä ja harja on heinäkuussa. Hiljaisimmat kuukaudet ovat tammikuu ja helmikuu. Kuten olemme jo kirjoittaneet, kesällä pedikyristien kädet ovat täynnä jalkoja. Jotkut teknikot eivät pääse osumaan. Tällöin tapaamiset on tehtävä etukäteen. Voit varata kaksi kuukautta etukäteen kanssamme."
            />

            <Heading as="h2" content="Talvi ja pedikyyri" />
            <Image
              className="img"
              src={PersonImage6}
              alt="manikyyri master-maalaus ja nainen varpaankynnet kynsilakkalla siveltimellä javalkoiset käsineet kädessä"
            />
            <Text
              content="
              Pedikyyri, talvella, miksi? Vastaus on yksinkertainen - ihmiset matkustavat talvella rantalomalla, käyvät kylpylässä, kouluttavat esimerkiksi paljain jaloin joogaa jne. Syitä on itse asiassa paljon enemmän kuin luulisi!

              On myös ihmisiä, jotka eivät pidä jalastaan. He ovat havainneet, että kävely pedikyyrissä ja kaunis kivilakka tekevät ihmeitä. Olemme vain iloisia siitä! Sitä teemme, jotta jalat olisivat kauniita ja pehmeitä!
            "
            />
          </Content2> */}
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
