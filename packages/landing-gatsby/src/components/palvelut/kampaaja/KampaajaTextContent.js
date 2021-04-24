import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
// import Image from 'common/src/components/Image';

// import PersonImage1 from './images/nainen-kampaaja-kampauksen-blondi-nainen-kauneussalonki.webp';
// import PersonImage2 from './images/blonde-woman-getting-her-hair-done.webp';
// import PersonImage3 from './images/beautiful-young-brunette-with-make-up-curly-hair.webp';
// import PersonImage4 from './images/mature-woman-getting-her-hair-straightened-by-hairdresser-home.webp';
// import PersonImage5 from './images/little-girl-getting-her-hair-dyed.webp';
// import PersonImage6 from './images/woman-getting-her-hair-dyed-by-hairdresser-home.jpg';

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
              alt="nainen-kampaaja-kampauksen-blondi-nainen-kauneussalonki.webp';"
            /> */}

            <Heading className="heading" as="h2" content="Hiusten Valkaisu" />

            <Text content="Valkaisu on kemiallinen käytäntö , milloin hiusten väriä valkaistaan. Valkaisussa käytetään alati hapetetta. Valkaisu  on mahdollista tehdä  vaalennusvärillä, milloin hiuksen  pigmenttiä sävytetään vaaleammaksi tai vaihtoehtoisesti valkaisulla, milloin hiuksen pigmentti poistetaan täysiin." />
            <Text content="Näistä vaihtoehtoista värjäys on hiukselle merkittävästi hellävaraisempi käsittely. Valkaisun ohella on hyvä  lisätä sävytys , joka huoltaa hiusta ja peittää keltaisuutta." />
            {/* <Image
              className="img"
              src={PersonImage2}
              alt="nainen-kampaaja-kampauksen-blondi-nainen-kauneussalonki.webp';"
            /> */}
            <Text content="Vaaleiden hiusten sävyn säilyttämiseksi  tulee aina höydyntää kotihoidossa siihen tarkoitettuja hopeashampoota ja -hoitoainetta. Ilman niitä valmisteitä kylmän vaalea sävy tulee katoamaan hiuksista ja hiusten sävy tulee taittamaan viileästä lämpimään." />
            <Text content="Yleisimmät valkaisuaineet ovat vetyperoksidi ja ammoniakki. Jotkut tuotemerkit markkinoivat itseään 'peroksidittomaksi', mutta se ei ole totta. Nämä tuotemerkit käyttävät vain toista hiusvalkaisuainetta, joka on yhtä vahingollista kuin peroksidi." />

            <Text content="Joten onko valkaisuaineille mitään luonnollisia vaihtoehtoja? No eipä oikeastaan.Sinun on käytettävä jonkinlaista valkaisuainetta." />
            <Text content="Hiusvalkaisu on vahingollista, siitä ei ole epäilystäkään. Mutta voit silti työskennellä hiusten korjaamiseksi ja vahvistamiseksi (plus välttää niitä ärsyttäviä messinkisiä sävyjä) seuraamalla näitä vinkkejä:" />
            <Text content="Käyttää parasta shampoota blondeille hiuksille. Tämä on tärkein vinkki valkaistujen hiusten parhaan jälkihoidon tekemiseksi.  Luonnolliset blondit tietävät jo tarvitsevansa violettisävyisiä puhdistusaineita estääkseen hiuksensa muuttumasta liian keltaiseksi. Jos olet ensimmäistä kertä blondi, muista tämä!" />
            <Text content="Älä pesee hiukseitä liian usein. Vaikka käytät parasta shampoota on silti viisasta ohittaa joitain pesuja. Miksi? Koska tämä antaa luonnollisten päänahkaöljyjen tehdä sen, mitä heidän pitäisi tehdä - kosteuttaa hiuksiasi. Sinun ei myöskään tarvitse muotoilla hiuksiasi niin usein, mikä on ehdottomasti hyvä asia valkaisuaineksille." />

            <Heading className="heading" as="h2" content="Tyviväri" />
            <Text content="Oikea perusväri on välttämätön miellyttävälle ja imartelevalle hiusvärille. Riippumatta siitä, vaalennatko hiuksiasi tai vain värit harmahtavia hiuksiasi, oikean perusvärin luominen on ensimmäinen askel valitsemaan oikea hiusten väri käytettäväksi." />
            {/* <Image
              className="img"
              src={PersonImage3}
              alt="nainen-kampaaja-kampauksen-blondi-nainen-kauneussalonki.webp';"
            /> */}
            <Text content="Hiusten väri on tiede, joka voi olla monimutkainen ja sekava harrastajille. Vaikka useimmilla ihmisillä ei ole mitään ongelmaa hiusvärin määrittämisessä, perusväri on eri asia tarkan hiusvärin maailmassa." />
          </Content1>

          {/* Second Column */}

          <Content2>
            <Heading className="heading" as="h2" content="Sävytys" />
            <Text content="Hiusten sävy ja hiusväri ovat itse asiassa kaksi täysin erilaista asiaa. Vaikka hiusvärin on tarkoitus olla pysyvämpi, hiusten sävyä pidetään puolipysyvänä. Hiusten sävy eroaa hiusväristä, koska sävytysprosessi lisää ylimääräisen värikerroksen säikeisiisi. Pohjimmiltaan lisäät vain pigmenttikerroksen hiuksillesi jo olevan värin päälle. Tämän prosessin tulisi johtaa hienovaraiseen, läpinäkyvään sävyyn ja lisätä värikkäitä yksityiskohtia hiusväriisi. Hiusten sävytys voi myös johtaa kiiltävämpään ulkonäköön." />
            {/* 
            <Image
              className="img"
              src={PersonImage4}
              alt="nainen-kampaaja-kampauksen-blondi-nainen-kauneussalonki.webp"
            /> */}
            <Text content="Tyypillisesti tarvitset valkaisuainetta ja väriä vaalentaaksesi hiuksiasi tarpeeksi värin kiinnittymiseksi. Kun olet päättänyt värin ja ostanut tarvikkeet, aloita värjäys." />

            <Heading className="heading" as="h2" content="Raidat" />
            <Text content="Hiusten raidoittaminen on loistava tapa lisätä väriä hiuksiin sitoutumatta täysin uuteen väriin. Jos tunnet itsesi varmaksi omien hiusten värjäyksestä, mene lähimpään kauneudenhoitotuotteideen myymälään ja osta kaikki tarvittavat tarvikkeet." />
            {/* 
            <Image
              className="img"
              src={PersonImage6}
              alt="nainen-kampaaja-kampauksen-blondi-nainen-kauneussalonki.webp"
            /> */}
            <Text content="Ammattimainen  hiusväri tunnetaan perusvärinä hiusten vaalentamiseksi tai tummentamiseksi.	Jos olet valmis tekemään merkittävän muutoksen hiusväriisi, sinun on keksiä värikaava, joka tallettaa sävyt, jotka auttavat luomaan halutun värin." />
            <Text content="Kun halutaan useampaa kuin yhtä tai kahta vaalentamisen tai tummentamisen sävyä, asianmukainen perusvärivalinta tulisi jättää koulutetun ammattilaisen tehtäväksi." />
            {/* 
            <Image
              className="img"
              src={PersonImage5}
              alt="nainen-kampaaja-kampauksen-blondi-nainen-kauneussalonki.webp"
            /> */}
            <Text
              content="Koska tämä prosessi on puolipysyvä, sillä on taipumus hiipua nopeammin kuin keskimääräinen hiusväri. Sen odotetaan kestävän noin neljä viikkoa, mutta se voi haalistua aikaisemmin, ellei sitä hoideta kunnolla. Katso nämä vinkit varmistaaksesi, että hiustesi sävy kestää mahdollisimman kauan, ennen kuin palaat salonkituoliin.
                  Yksi helpoimmista paikoista haalistua  tällaiselle hiusvärille on suihkussa. Pitääksesi värisi eloisana ja katseenvangitsijana sinun on käytettävä shampooa ja hoitoaineita, jotka sopivat värikäsitellyille hiuksille. "
            />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
