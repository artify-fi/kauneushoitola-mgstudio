import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Footer from '../../containers/AppModern/FooterMap';

import Banner from '../../components/palvelut/kynnet/KynnetBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kynnet/KynnetBannerNarrow';
import Hintalista from '../../components/palvelut/kynnet/KynnetHinnasto';
import TextContent from '../../components/palvelut/kynnet/KynnetTextContent';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kauniit kynnet MG Studio Kauneushoitola Martinlaakso"
      description="Ammattimainen hoito juuri Sinulle"
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Kynnet" />
    <Hintalista />
    <TextContent />
    <Footer />
  </Layout>
);

export default IndexPage;
