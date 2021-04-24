import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
// import Image from 'common/src/components/Image';

// import PersonImage1 from './images/female-beauty-eyebrows-lashes-1.webp';
// import PersonImage2 from './images/female-beauty-eyebrows-lashes-2.webp';
// import PersonImage3 from './images/female-beauty-eyebrows-lashes.webp';
// import PersonImage4 from './images/ful-female-eyes-with-make-up-brush-1.webp';
// import PersonImage5 from './images/iful-young-woman-s-eye-close-up-shot.webp';
// import PersonImage6 from './images/tiful-female-eyes-with-make-up-brush.webp';
// import PersonImage7 from './images/ty-girl-with-beautiful-big-blue-eyes.webp';

import SectionWrapper, { Section, Content1, Content2 } from './styleContent';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading as="h2" content="Ripsien pidennys (Volyymiripset)" />
            {/* 
            <Image
              className="img"
              src={PersonImage1}
              alt="kayniit volyymiripset ja ripsien pidennykset naisille helsinki malminkartano pohjois haaga."
            /> */}

            <Text
              content="Volyymiripset tai venäläiset volumiripset tai Hollywood-ripset ovat keinotekoisten ripsien tyyli, jossa ripsiteknikko levittää kahdesta kuuteen ihanan kevyttä synteettistä ripsettä tuulettimen muotoisesti jokaiselle yksittäiselle luonnolliselle ripsien hiukselle.
                            Tilavat silmäripset on valmistettu samasta materiaalista kuin klassiset tekoripset, mutta paljon ohuemmat, jotta luonnollisten ripsien on helpompaa levittää useita tekohiuksia kerralla. Koska volumetriset ripset ovat niin kevyitä, ne pysyvät paikallaan noin kaksi kertaa niin pitkään kuin klassiset ripset."
            />

            <Heading
              as="h2"
              content="Ripsien pidennyksissä käytetyt materiaalit."
            />
            {/* 
            <Image
              className="img"
              src={PersonImage2}
              alt="kesäksi kauniit kulmakarvat ja ripset naisille malminkartanon lähellä kaikille asiakkaille."
            /> */}

            <Text
              content="Materiaali on usein synteettistä minkkiä tai silkkiä.
                           Lisäksi volyymiripset ovat paljon kevyempiä ja ohuempia kuin luonnolliset ripset.
                           Volyymiripsien tulisi kestää noin 4-6 viikkoa, huoltoväli 2-3 viikon välein.

                            Kenelle sopiivat volyymiripset?
                            Tämä tyyli sopii ihmisille, joiden luonnolliset ripset ovat hyvin ohuita ja jotka haluavat ylimääräistä voimakkuutta ripsiin.
                            Todellisuudessa volyymiripset voivat kuitenkin nauttia myös niistä, joiden luonnollinen ripsekasvu on jo rehevää - volyymit luovat kauniin ja hohdokkaan vaikutelman, joka ei jätä ketään kylmäksi."
            />

            <Heading as="h2" content="Mitä tarvitaan ripsien asentamiseen?" />
            {/* <Image
              className="img"
              src={PersonImage3}
              alt="naisen silmät kauniiksi meikkiharjalla myyrmäki ja helsinki"
            /> */}
            <Text
              content="Tilavat ripset on merkitty seuraavasti: 2D, 3D, 4D, 5D ja 6D. Nämä numerot osoittavat, kuinka monta ripsipidennystä käytetään jokaiseen luonnolliseen ripsiin.
                            2D tarkoittaa kahta synteettistä ripsiä yhdessä tuulettimessa, 3D: llä on kolme, 4D: llä on neljä ja niin edelleen. Raskaampi D on faneillesi, täyteläisempi tai
                            laajempi tulos. Jos käytät enemmän kuin kuutta ripsiä tuulettimessa, olet jo megavolyymiripset. Eri kaaret ja pituudet antavat haluamasi lopputuloksen."
            />
          </Content1>

          <Content2>
            <Heading
              as="h2"
              content="Kuinka volyymiripset ripset eroavat klassisista ripsistä?"
            />
            {/* 
            <Image
              className="img"
              src={PersonImage4}
              alt="kauniit eroavat volyymiripset sopivat kaikille niin arkielämässä kuin juhlassa helsinki pitäjämäki malminkartano myös saa tulla."
            /> */}

            <Text
              content="Klassiset ripsien pidennykset ovat tekniikka, jossa yksi ripsien jatke kiinnitetään jokaiseen luonnolliseen ripsiin.
                          Ja kuten edellä mainittiin, volyymiripsissä käytetään useampaa kuin yhtä pidennystä kuhunkin luonnolliseen hiukseen järjestäen ne tuulettimen muotoisella tavalla. Tämä antaa vaikutelman, että jokaisen luonnollisen hiuksen juuressa kasvaa enemmän ripsiä."
            />

            <Heading
              as="h2"
              content="Puhaltimessa käytettyjen pidennysten määrä..."
            />
            {/* 
            <Image
              className="img"
              src={PersonImage5}
              alt="ripsien pidennysten vastaanottaja on tyytyväinen vantaan malminkartanossa ja helsinkista saa tulla helposti junalla."
            /> */}

            <Text
              content="..  riippuu siitä, kuinka paksut ja vahvat pidennysten vastaanottajan luonnolliset ripset ovat. Yleissääntönä on kuitenkin, että mitä enemmän pidennyksiä sijoitetaan tuulettimeen ja mitä pehmeämmät ripset ovat, sitä kevyempiä ja ohuempia niiden on oltava.

Kuinka tehdä tilava ripsien tuuletin?
Volyymiripsissä asennustekniikka on tärkeää maksimaalisen kestävän tuloksen aikaansaamiseksi. Jos klassisia pidennyksiä levitetään luonnollisiin ripsiin, volyymien ollessa kyseessä tuulettimen suljettu osa on käärittävä luonnollisten ripsien ympärille kevyesti painamalla.
"
            />

            <Heading
              as="h2"
              content="Kääri tuuletin luonnollisten ripsien ympärille"
            />
            {/* 
            <Image
              className="img"
              src={PersonImage6}
              alt="ripsien pidennysten tarttuvuus ja pidättyminen on tarjolla mg studion kauneushoitolasta malminkartanolla."
            /> */}

            <Text
              content="Niin vahvistat pidennysten tarttuvuutta ja pidättymistä. Käärimisen yhteydessä tuulettimen paino jakautuu tasaisemmin ja luonnolliset ripset saavat vähemmän kuormitusta.

Mitä leveämpi tuuletin, sitä pehmeämpi se on. Kapeammilla tuulettimilla kokonaisvaikutelma on tarkempi. Puhaltimen leveys on jokaisen maku.

Volyymiripset voidaan asentaa monilla eri tavoilla tai tekniikoilla. Tässä on joitain suosituimpia:

Raita menetelmä
Säätämismenetelmä
Liimapistemenetelmä"
            />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
