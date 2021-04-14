import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import Banner from '../../components/palvelut/olaplex/KampaajaBanner';
import BannerNarrow from '../../components/palvelut/olaplex/KampaajaBannerNarrow';
import Hintalista from '../../components/palvelut/olaplex/KampaajaHinnasto';
import TextContent from '../../components/palvelut/olaplex/KampaajaTextContent';

const olaplex = () => {
  return (
    <Layout>
      <SEO title="Olaplex Salonkihoito Helsinki, Malminkartano" />
      <BannerNarrow />
      <Banner />
      <Hintalista />
      <TextContent />
      <Footer />
    </Layout>
  );
};

export default olaplex;
