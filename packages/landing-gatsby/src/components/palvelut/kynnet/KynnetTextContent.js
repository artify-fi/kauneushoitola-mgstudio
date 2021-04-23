import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';

import PersonImage1 from './images/beautiful-french-manicure-art-design.webp';
import PersonImage2 from './images/woman-having-her-manicure-done-close-up.webp';
import PersonImage3 from './images/beautiful-woman-s-nails-with-beautiful-french-manicure.jpg';
import PersonImage4 from './images/ing-her-manicure-done-close-up-salon.webp';
import PersonImage5 from './images/woman-showing-her-beautiful-nails.webp';
import PersonImage6 from './images/gh-angle-woman-doing-manicure-client.webp';

import SectionWrapper, { Section, Content1, Content2 } from './styleContent';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Image
              className="img"
              src={PersonImage1}
              alt="kaunis ranskalainen manikyyri art design malminkartano martinlaakso helsinki';"
            />
            <Heading
              className="heading"
              as="h2"
              content="Mitä on geelilakkaus?"
            />
            <Text content="Monet ylistävät, että geelilakka on parasta mitä heille on tapahtunut ja suosittelevat sitä kaikille. Ne pitävät geelilakan tuoreena ja kauniina seuraavaan hoitoon asti. Jotkut taas valittavat, että geelilakka ei tartu kiinni. Alkaako se kuoriutua vai geeli maali irtoaa suoraan tai vastaavasti? Kirjoitamme, kuinka pidät geelilakkaa, nämä vinkit sopivat myös sen jälkeen, kun käytät geeliä ensimmäisen kerran tai sen jälkeen, kun olet mennyt geelilakan päälle. Joten miten pidät paremmin sormesi ristissä? " />

            <Text content="On muutama yksinkertainen asia, joka pitää mielessä, jotta geeli lakkaa. Geelilakka on melko vahva ja kestää monia aktiviteetteja, mutta geelilakalla on myös heikkouksia…" />

            <Image
              className="img"
              src={PersonImage2}
              alt="nainen kenelle on manikyyrin tekeminen kasilla ja se tapahtuu malminkartanossa MG Studiossa lähikuva';"
            />
            <Heading
              className="heading"
              as="h2"
              content="Mitä voit välttää tuoreella geelilakalla, jotta tulos olisi mukava:"
            />
            <Text
              content="Älä noki tai pureskele kynsiäsi
              (Tämä lyhentää merkittävästi geelilakan käyttöikää + ei näytä hyvältä + voi päättyä traumaan, jos vedät vahingossa liian suuren palan ihoa kerralla + kynnet toipuvat tästä pitkään + se vahingoittaa myös naulata)
              Älä noki geelilakkaa koskaan.
              (Jos sinusta tuntuu, että geelilakka alkaa pudota jonnekin tai kynsisängyssä on korkeampi paikka, yritä jättää se yksin ja jos haluat päästä eroon siitä, käytä viilaa tai leikkaa se pihdeillä. ei ole hyvä irrottaa geelilakka kokonaan, odota seuraavaan huoltoon tai kirjoita teknikkoon tai liota tämä lakka kotona)"
            />

            <Image
              className="img"
              src={PersonImage3}
              alt="kaunis nainen kynnet kauniilla ranskalaisella manikyyrillä halvalla malminkartano ja myyrmaki seka helsinki"
            />
            <Heading
              className="heading"
              as="h2"
              content="Älä käytä kynsiäsi työkaluina."
            />
            <Text
              content="Yritä olla naarmuttamatta tai kynsimättä voimakkaasti naulattuja esineitä. (Toistuva ja painava naarmuuntuminen voi rikkoa geelilakan sormenpäästä)
              Käytä kumihansikkaita työskennellessäsi kotona
              (Kauniit kynnet eivät tarkoita, että työtä ei voida enää tehdä nyt!
              Bonuksena se myös suojaa ihoa kemikaaleilta ja kuivausvedeltä! )
              Mitä muuta voisit tehdä kynsillesi ja geelilakallesi?"
            />

            <Heading
              className="heading"
              as="h2"
              content="Pidä kynsiäsi ja kohtele niitä rakkaudella."
            />
            <Text
              content="Kerma kätesi ja öljy kynnet.
              (Estää kynsien naarmuuntumisen ja haurauden)
              Jos lähdet matkalle, ilmoita siitä teknikollesi.
              Kun matkustat, vietät enemmän aikaa vedessä ja auringossa ja teet asioita, joita et tee päivittäin. Ps! On luonnollista, että kynnet voivat vaihtaa väriä auringossa - esim. Matalat pigmenttivärit (valkoinen, vaaleanpunainen) voivat muuttua keltaisiksi - tämä voidaan estää hieman."
            />
          </Content1>

          {/* Second Column */}

          <Content2>
            <Heading className="heading" as="h2" content="Geelikynnet " />
            <Text content="Geelikynnet ovat kestävimmät kynnet. Kynnesi on peitetty geelillä, jos et halua pidentää kynsiäsi. Kuitenkin, jos haluat pidempiä kynsiä, jatka kynsiäsi geelillä käyttäen stensiiliä. Kynnet peitetään sitten geelillä, joka kovettuu UV-lampun alla muutamassa minuutissa. Geelikynnet pysyvät erittäin vahvina, jos materiaalit ovat hyviä ja tekniikka oikea, kynnet eivät murtu." />

            <Image
              className="img"
              src={PersonImage4}
              alt="huolella tehty manikyyri esimerii lähikuva salonki helsinki ja malminkartano"
            />
            <Heading
              className="heading"
              as="h2"
              content="Hoitoon tultaessa..."
            />
            <Text content="Hoitoon tultaessa vanha geeli kerros hiotaan enimmäkseen ja kynsi peitetään tuoreella geelillä. Geelikynnet voidaan koristaa kimaltelevilla jauheilla, maaleilla, kiteillä, maalauksilla, folioilla. Tee myös halkeileva ja 'kissan silmä' -vaikutus." />

            <Image
              className="img"
              src={PersonImage5}
              alt="kauniit kynnet naiselle vaivattomasti ja halvalla malminkartano ja helsinki seka pohjois haaga"
            />
            <Heading
              className="heading"
              as="h2"
              content="Usein Kysytyt Kysymykset"
            />
            <Text
              content="Kenelle geelilakka sopii?
              Geelilakka sopii kaikille, jotka haluavat hyvin hoidettuja, pitkäikäisiä kauniita ja luonnollisia kynsiä."
            />

            <Text
              content="Auttaako geelilakka vahvistamaan kynsiä?
              Kyllä, geelilakka auttaa vahvistamaan kynsiä, koska levitetty kerros kovettuu lampun alla.
              "
            />
            <Text
              content="Pelkääkö geelilakka kylmää?
              Jos lämpötilassa tapahtuu äkillinen muutos, geelilakka voi irrota 
              myös geelikynsiin."
            />

            <Image
              className="img"
              src={PersonImage6}
              alt="kauniit kynnet ammatti taidolla tehty manikyyri naiselle vaivattomasti ja halvalla myyrmanni ja helsinki seka pohjois haaga"
            />

            <Text
              content="Voiko geelilakka pidentää kynsiä?
                Ei voi. Tätä varten sinun tulee valita Gel Nail Installation -palvelu."
            />
            <Text
              content="Kuinka poistaa geelilakka?
                Suosittelemme, että tulet poistamaan geelilakka ohjaamosta. Kotona poistamisella on suuret mahdollisuudet vahingoittaa kynsiäsi vahingossa viilata kynnesi liian ohueksi."
            />
            <Text
              content="Mikä on ombré?
                Ombré-ilmiö tarkoittaa diffuusiota - yksi väri sulautuu toiseen väriin. Esimerkiksi: kynsien kärjet ovat kevyempiä kuin kynsien alussa."
            />
            <Text
              content="Mikä on 'ranskalainen manikyyri'?
                Läpinäkyvä tai vaaleanpunainen kynsi valkoisella kärjellä. Voidaan tehdä myös muilla väreillä. Ranskalainen manikyyri voidaan tehdä sekä geelilakalla että geelikynsillä."
            />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
