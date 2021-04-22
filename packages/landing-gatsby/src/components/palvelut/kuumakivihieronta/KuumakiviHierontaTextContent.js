import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import SectionWrapper, { Section, Content1, Content2 } from './styleContent';
import Image from 'common/src/components/Image';

import PersonImage2 from './images/beautiful-woman-relaxing-spa-salon-with-hot-stones-body-beauty-treatment-therapy.jpg';
import PersonImage1 from './images/hot-stone-massage-therapy.webp';
import PersonImage3 from './images/n-having-hot-stone-massage-therapy-1.webp';
import PersonImage4 from './images/sed-eyes-receiving-hot-stone-massage.webp';
import PersonImage5 from './images/stones-body-beauty-treatment-therapy.webp';
import PersonImage6 from './images/young-woman-having-hot-stone-massage-therapy-1.jpg';

const KuumakiviHieronta = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Image
              className="img"
              src={PersonImage1}
              alt="kaunis nainen rentouttava spa salonki kuumilla kivillä vartalo kauneushoito terapia helsinki, martinlaakso, malminkartano seka myyrmanni"
            />
            <Heading
              as="h1"
              content="Mitä on Hot Stone eli kuumakivihieronta?"
            />

            <Text content="Laavakivi tai basaltti on eräänlainen magmakivi, joka muodostuu sulan laavan jähmettymällä. Laavakivi säilyttää lämmön paremmin kuin mikään muu kivi. Samanaikaisesti kuumakivihieronta voidaan tehdä myös kotimaisella kalkkikivellä, mutta kiven muoto ja sileä pinta ovat tärkeitä." />

            <Heading
              as="h2"
              content="Yksi luonnollisimmista paranemisen muodoista"
            />
            <Text content="Laavakivi- tai kuumakivihieronta on yksi luonnollisimmista palautumisen muodoista, joka käyttää ainutlaatuista menetelmää maapallon lämpöenergian ohjaamiseksi ihmiskehoon. Laavakivet, joiden lämpötila on korkeampi kuin ihmisen käsissä, säteilevät voimakasta ja turvallista lämpöä, joka tunkeutuu syvään ja rentoutuu ja paranee." />

            <Heading
              as="h2"
              content="Kuumakivihieronta auttaa löytämään sisäisen tasapainon"
            />

            <Image
              className="img"
              src={PersonImage2}
              alt="kuuma kivi hieronta hoito terapia vantaa myyrmäki"
            />
            <Text
              content="Jos olet fyysisesti tai henkisesti väsynyt, tämä hoito on juuri sitä mitä tarvitset kehon virkistämiseen ja parantamiseen.

              Kuumakivihieronta auttaa löytämään sisäisen tasapainon, palauttamaan ruumiin ja sielun eheyden. Kivet kuumennetaan erityisessä lämmittimessä 54 - 57 asteen vedessä.
"
            />

            <Heading
              as="h2"
              content="Hierontatekniikat ovat pitkiä ja virtaavia"
            />
            <Image
              className="img"
              src={PersonImage3}
              alt="kuuma kivi hieronta hoito kauneus studiossa"
            />
            <Text content="suoritetaan sekä käsin että kivillä. Lämpimiä kiviä asetetaan myös kehoon (selkä, rinta, vatsa, pohjat ja kämmenet) hetkeksi." />
          </Content1>

          <Content2>
            <Heading as="h2" content="Kuumia ja kylmiä kiviä." />
            <Image
              className="img"
              src={PersonImage4}
              alt="väsynyt silmät saavat kuumakivi terapiaa ja hierontaa malminkartanolla vantaan lähistössä ja helsinkissä"
            />
            <Text content="Niitä voidaan käyttää myös vuorotellen. Se stimuloi verenkiertoa ja kannustaa imukudosta erittämään jätetuotteita. Tämä hieronta alkaa yleensä kuumilla kivillä, jotka rentouttavat ja vähentävät lihasjännitystä, ja päättyvät kylmiin kiviin, mikä puolestaan ​​vahvistaa immuunijärjestelmää. Voidaan tehdä myös vuorotellen kuumien ja kylmien kivien kanssa." />

            <Heading
              as="h2"
              content="Mitä hyvää tekee laavakivihieronta Sinulle"
            />
            <Image
              className="img"
              src={PersonImage5}
              alt="ihon rentoutava hoito kuumakivi hieronnalla ja luo hyvän mielialan martinlaaksossa  ja malminkartanossa"
            />
            <Text
              content="
              Rentouttaa lihaksia ja lämmittää kudoksia,
              Vähentää stressiä,
              Lievittää pientä kipua,
              Nopeuttaa imusuonten ja verenkiertoa,
              Lievittää jännityspäänsärkyä,
              Rauhoittaa hermostoa ja
              Lievittää kuukautiskipuja"
            />

            <Heading as="h2" content="Verenkierto-ongelmat" />
            <Image
              className="img"
              src={PersonImage6}
              alt="nuori ihminen saa kuumakivi terapia ja nauti täydellisesti sekä on todella tyytyväinen helsinkissa ja malminkartanolla vantaan vieressa."
            />
            <Text
              content="Hypotensio,
              Usein vilustuminen,
              Vasta-aiheet,              
              Hypertensio,
              Kasvaimet,
              Sydän-ja verisuonitaudit,
              Suonikohjut,
              Kuume,
              Sydän-, munuais- ja maksan vajaatoiminta
              Raskaus,
              Infektiot ja ihosairaudet."
            />
          </Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default KuumakiviHieronta;
