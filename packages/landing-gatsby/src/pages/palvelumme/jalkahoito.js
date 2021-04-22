import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Footer from '../../containers/AppModern/FooterMap';

import Banner from '../../components/palvelut/jalkahoito/JalkahoitoBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/jalkahoito/JalkahoitoBannerNarrow';
import Hintalista from '../../components/palvelut/jalkahoito/JalkahoitoHinnasto';
import TextContent from '../../components/palvelut/jalkahoito/JalkahoitoTextContent';

const jalkahoito = () => (
  <Layout>
    <SEO
      title="Jalkahoito MG Studio Kauneushoitola Martinlaakso"
      description="Ammattimainen hoito ongelmallisille ja terveille jaloille ja varpaiden kynsille."
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Jalkahoito" />
    <Hintalista />
    <TextContent />
    <Footer />
  </Layout>
);

export default jalkahoito;
