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
            {/* <Image
              className="img"
              src={PersonImage1}
              alt="kosmetologi laitaa naisen varpaille kynsilakka malminkartanossa helsingissa"
            /> */}
            <Heading
              as="h1"
              content="Kauniit ja kestävät kynnet kuukausiksi."
            />

            <Text content="Kynsien geelilakkaus on  led-valolla kovetettava kestolakkaus, jonka kesto on huomattavasti parempi tavalliseen kynsilakkaan verrattuna. Geelilakkaus kestää varpaissa parhaimmillaan jopa useita kuukausia, sillä se ei lohkeile tai kulu normaalissa käytössä tavallisen kynsilakan tapaan. Geelilakkaus on suttaantumaton välittömästi lakkauksen jälkeen." />

            <Heading as="h2" content="Kenelle geelilakka sopii parhaiten?" />
            {/* <Image
              className="img"
              src={PersonImage2}
              alt="kaunis täydellinen nainen saa iholle ja jaloille manikyyria ja geelilakkaust varpaille kauneussalonki malminkartano vantaan vieressä"
            /> */}
            <Text content="Geelilakka sopii niille, joilla ei ole aikaa tai taitoja kynsien hoitamiseen ja jotka haluavat kauniin, kiiltävän, pitkäikäisen ja luonnollisen tuloksen." />

            <Heading as="h2" content="Mitä on geelilakkaus?" />
            {/* <Image
              className="img"
              src={PersonImage3}
              alt="kaunis nainen jalat vihreillä kynsillä lakattu helsinkissa malminkartanon ja myyrmäen alueella"
            /> */}
            <Text
              content="Geelilakka on hybridilakka, jossa yhdistyvät lakan ja geelin parhaat ominaisuudet. Geelilakkaus on ohut led-valolla kovetettava geelimassan ja kynsilakan yhdistelmä ns. kestolakkaus, joka on suttaantumaton välittömästi lakkauksen jälkeen. Geelilakkaus voidaan tehdä sormiin tai varpaisiin.
                  Geelilakkausta ei pidä sekoittaa geelikynsiin, jotka ovat rakennekynnet."
            />
            <Text content="" />

            <Heading
              as="h2"
              content="Pitääkö minun mennä huoltoon ja kuinka usein?"
            />
            <Text content="On huollettava. Geelilakan huolto voi tapahtua 2-4 viikon välein. Huoltoaika on yksilöllinen. Paljon riippuu asiakkaan kynsilevystä, mutta myös yleisestä elämäntavasta, työstä, sääolosuhteista jne." />
          </Content1>

          <Content2>
            <Heading
              as="h2"
              content="Kuinka geelilakkaus eroaa tavallisesta kynsien lakkauksesta?"
            />
            {/* <Image
              className="img"
              src={PersonImage4}
              alt="kauniit naisten jalat kesän kynsien lakkaus ja muotoilu keltaisella geelilakalla kauneushoitolassa helsinki"
            /> */}
            <Text content="Geelilakka levitetään kynnelle tavallisen kynsilakan tapaan, mutta se kovetetaan joko LED- tai UV-uunissa. LED-uunissa kovetusaika on ainoastaan 30 sekuntia, UV-uunissa 1-2 minuuttia. Lakka saa kauniin, kiiltävän ja ennen kaikkea kestävän pinnan." />

            <Heading
              as="h2"
              content="Kuinka kauan geelilakkaus kestää hyvänä varpaissa?"
            />
            {/* <Image
              className="img"
              src={PersonImage5}
              alt="manikyyri ja pedikyyri kauneussalonkisa käsitleminen naiset jalat geelilakalla helsinkin kauneus hoitolassa"
            /> */}
            <Text content="Lakkaus kestää varpaissa yleensä lohkeilematta useita kuukausia. Varpaankynsistä geelilakka yleensä vain ”kasvaa ulos”." />

            <Heading
              as="h2"
              content="Kuinka helposti geeli kiillotettu kynsi voi rikkoutua?"
            />
            <Text content="Geelilakalla päällystetyn kynnen murtuma on yksilöllinen. Jälleen, kaikki riippuu ihmisen toiminnasta. On selvää, että ruuveja ei kannata kiristää geelilakalla peitetyillä kynsillä, kaapia tapettia seinältä, avata laatikko kynsien kärjellä ja muuten käyttää nauloja työkaluna. Valitettavasti tämä 'pieni asia' unohdetaan joskus. Geelilakalla päällystetyt kynnet on pidettävä samalla tavalla kuin tavallisella lakalla päällystetyt kynnet." />
            {/* <Image
              className="img"
              src={PersonImage6}
              alt="naisten jalat käden kynsien muotoilu ja lakkaus sekä manikyyri kauneussalonki myyrmäen ja martinlaakson lähellä"
            /> */}
            <Heading as="h2" content="Miten geelilakkaus poistetaan?" />
            <Text content="Geelilakkaus poistetaan hellävaraisesti liottamalla sille tarkoitetulla nesteellä tai viilaamalla käsi- tai sähköviilalla. Geelilakkausta ei ole tarkoitettu poistettavaksi itse kotona, eikä se ole poistettavissa kynsilakanpoistoaineella." />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
