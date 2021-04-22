import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import Banner from '../../components/palvelut/kasvohoito/KasvohoitoBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kasvohoito/KasvohoitoBannerNarrow';
import Hintalista from '../../components/palvelut/kasvohoito/KasvohoitoHinnasto';
import TextContent from '../../components/palvelut/kasvohoito/KasvohoitoTextContent';

const kasvohoito = () => {
  return (
    <Layout>
      <SEO title="Kasvohoito Helsinki, Malminkartano" description="" />
      <BannerNarrow />
      <Banner />
      <Title as="h1" title="Kasvohoito" />
      <Hintalista />
      <TextContent />
      <Footer />
    </Layout>
  );
};

export default kasvohoito;
