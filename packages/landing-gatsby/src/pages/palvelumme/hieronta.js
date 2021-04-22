import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';

import Banner from '../../components/palvelut/hieronta/HierontaBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/hieronta/HierontaBannerNarrow';
import Hintalista from '../../components/palvelut/hieronta/HierontaHinnasto';
import TextContent from '../../components/palvelut/hieronta/HierontaTextContent';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Geelilakkaus varpaisiin Helsinki, Malminkartano"
      description="Terveet ja kauniisti lakatut kynnet kuuluvat jokaisen luottavan naisen kauneusarsenaliin. Manikyyri geelilakalla on kätevä tapa varmistaa kynsien hyvin hoidettu ulkonäkö pitkään ja pienellä vaivalla.  "
    />
    <BannerNarrow />
    <Banner style={{ paddingBottom: '3em' }} />
    <Title as="h1" title="Hieronta" />
    <Hintalista />
    <TextContent />
    <Footer />
  </Layout>
);

export default IndexPage;
