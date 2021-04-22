import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import Banner from '../../components/palvelut/kampaaja/KampaajaBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kampaaja/KampaajaBannerNarrow';
import Hintalista from '../../components/palvelut/kampaaja/KampaajaHinnasto';
import TextContent from '../../components/palvelut/kampaaja/KampaajaTextContent';

const kampaaja = () => {
  return (
    <Layout>
      <SEO title="Kampaaja Helsinki, Malminkartano" />
      <BannerNarrow />
      <Banner />
      <Title as="h1" title="Kampaaja (oppilastyö)" />
      <Hintalista />
      <TextContent />
      <Footer />
    </Layout>
  );
};

export default kampaaja;
