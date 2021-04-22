import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import Banner from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausBannerNarrow';
import Hintalista from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausHinnasto';
import TextContent from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausTextContent';

const geelilakkausVarpaisiin = () => {
  return (
    <Layout>
      <SEO
        title="Geelilakkaus varpaisiin Helsinki, Malminkartano"
        description="Terveet ja kauniisti lakatut kynnet kuuluvat jokaisen luottavan naisen kauneusarsenaliin. Manikyyri geelilakalla on kätevä tapa varmistaa kynsien hyvin hoidettu ulkonäkö pitkään ja pienellä vaivalla.  "
      />
      <BannerNarrow />
      <Banner />
      <Title as="h1" title="Geelilakkaus Varpaisiin" />
      <Hintalista />
      <TextContent />
      <Footer />
    </Layout>
  );
};

export default geelilakkausVarpaisiin;
