import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';

import Banner from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatBannerNarrow';
import Hintalista from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatHintalista';
import TextContent from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatTextContent';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kauniit ripset ja kulmat"
      description="Ripsienpidennys / Ripsien ja kulmien kestovärjäys. Volyymiripset tai venäläiset volumiripset tai Hollywood-ripset ovat keinotekoisten ripsien tyyli, jossa ripsiteknikko levittää kahdesta kuuteen ihanan kevyttä synteettistä ripsettä tuulettimen muotoisesti jokaiselle yksittäiselle luonnolliselle ripsien hiukselle."
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Ripset & Kulmat" />
    <Hintalista />
    <TextContent />
  </Layout>
);

export default IndexPage;
