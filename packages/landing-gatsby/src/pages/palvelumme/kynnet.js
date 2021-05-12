import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';

import Banner from '../../components/palvelut/kynnet/KynnetBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kynnet/KynnetBannerNarrow';
import Hintalista from '../../components/palvelut/kynnet/KynnetHinnasto';
import TextContent from '../../components/palvelut/kynnet/KynnetTextContent';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kauniit ja kestävät kynnet"
      description="Pidä Kynsiäsi Ja Kohtele Niitä Rakkaudella.
      Kerma kätesi ja öljy kynnet. (Estää kynsien naarmuuntumisen ja haurauden) Jos lähdet matkalle, ilmoita siitä teknikollesi. Kun matkustat, vietät enemmän aikaa vedessä ja auringossa ja teet asioita, joita et tee päivittäin."
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Kynnet" />
    <Hintalista />
    <TextContent />
  </Layout>
);

export default IndexPage;
