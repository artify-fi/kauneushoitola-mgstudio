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
            {/* <Image
              className="img"
              src={PersonImage1}
              alt="nainen makuulla kylpylä salonkissa iho- ja vartalonhoito seka rentoutuminen hieronta kosmetologia käsite helsinki malminkartano ja helsinkissa"
            /> */}
            <Heading
              as="h1"
              content="Stressi ja jännitys - kaksi suurinta ahdistusta nykyelämässä."
            />

            <Text content="Rentouttava hieronta auttaa sinua unohtamaan ne. Paras hemmottelu on antaa vartalo ammattilaisen hoitaville käsille ja nauttia esimerkiksi klassisesta, thaimaalaisesta tai suklaahieronnasta. Tällaisen kokemuksen jälkeen tunnet olosi jälleen stressittömäksi ja onnellisemmaksi." />

            <Heading
              as="h2"
              content="Hieronnasta apua vartalon kiputiloihin."
            />
            {/* <Image
              className="img"
              src={PersonImage2}
              alt="kauneushoitola kylpylä rentoutuva selkähieronta ammattimaisesti helsinki martinlaakso ja malminkartano."
            /> */}
            <Text content="Hieronta on perinteinen, kaikenikäisille soveltuva pehmytkudoksien hoitomuoto. Sitä käytetään esimerkiksi yleiseen rentoutumiseen, kivun lievittämiseen, ummetuksen hoitoon ja lihasten huoltamiseen. Hieronta antaa hyvän olon, vähentää stressiä ja ennaltaehkäisee erilaisia vaivoja." />

            <Heading as="h2" content="Miksi hierontaan?" />
            {/* <Image
              className="img"
              src={PersonImage3}
              alt="kauneushoitola malminkarton hyva ja halpa hieronta kaikille ihmisille"
            /> */}
            <Text content="Hieronta on hoitotapahtuma, jonka tavoitteena on lisätä kudosten aineenvaihduntaa ja parantaa verenkiertoa. Hierontaan tulon syynä ovat usein mm. erilaiset lihaskireydet, jäykkyydet ja akuutit tai krooniset kivut, stressi, rentoutuminen, palautuminen tai urheilijan lihashuolto.  Myös vammoista toipuminen nopeutuu  oikein ajoitetulla hieronnalla. Yleistä on myös krooninen kipu, jossa syy voi olla muualla kuin lihaksistossa, mutta kipu aiheuttaa lihaskireyttä ja aineenvaihdunnan heikentymistä alueella.  Tämä puolestaan ylläpitää jatkuvaa kipua. Kysymyksessä on siis itseään ruokkiva kipukehä, jonka katkaisemisessa hieronta on usein avuksi." />
          </Content1>

          <Content2>
            <Heading as="h2" content="Lisäksi hyvä tietää." />
            {/* <Image
              className="img"
              src={PersonImage4}
              alt="hieroja wellness selkähieronta asiakas spa keskus helsinki ja myyrmanni vantaa"
            /> */}
            <Text
              content="Me kaikki muistamme hetken, jolloin kätemme tai jalkamme hulluivat. Jotkut ihmiset saavat sen joka päivä. Mitä tehdä kylmät kädet ja jalat vastaan ​​ja milloin sinun pitäisi olla ahdistunut?

Talvella miinusasteet, monet ihmiset alkavat tuntea kylmää käsissään ja jaloissa. Usein kysymys ei ole siitä, ovatko käsineet päällä ja paksut sukat jalassa, vaan siitä, onko kyseessä verenkierron häiriö. Verenkierron häiriöitä voi esiintyä monilla, mutta yleisemmillä naisilla, jotka työskentelevät pakotetussa verenpaineessa. Verenkiertohäiriöt voivat johtua lämpötilasta, kehon ominaisuuksista, iästä, stressistä, tupakoinnista sekä sairaudesta.

Kehoa jäähdyttäviä ruokia on suositeltavaa välttää: esimerkiksi trooppisia hedelmiä, sianlihaa, suuria määriä kylmää salaattia, kahvia ja hiilihapotettuja juomia. Lämpimäksi tulemiseksi on pidettävä etusijalla ruokia, jotka voidaan maustaa inkiväärillä, kardemummalla tai pippurilla, juoda inkivääriä, syödä naudanlihakeittoa, karitsan muhennosta, vihanneksia, parsakaalia, fenkolia, munia tai luumuja. On myös hyödyllistä käydä saunassa säännöllisesti, mutta myös liikuttaa jalkoja ja käsivarsia, porealtaita ja hierontaa."
            />

            <Heading as="h2" content="Hieronnan hyödyt:" />
            {/* <Image
              className="img"
              src={PersonImage5}
              alt="86 / 5000
              Translation results
              nainen kylpylä hieroja klassikko rentouttava kauneushoitola helsinkissa ja vantaalla seka uusimaalla "
            /> */}
            <Text
              content="Kipu lievittyy
              Aineenvaihdunta tehostuu
              Ihon joustavuus paranee
              Palauttaa harjoittelusta
              Stressi vähenee
              Keho rentoutuu
              Mieli virkistyy"
            />

            <Heading as="h2" content="Esteet hieronnalle:" />

            <Text
              content="
            Flunssa, influenssa
            Keuhkoinfektiot kuten keuhkokuume, tuberkuloosi
            Sairaalainfektiot
            Kaikki rokot
            Kaikki vatsataudit
            "
            />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
