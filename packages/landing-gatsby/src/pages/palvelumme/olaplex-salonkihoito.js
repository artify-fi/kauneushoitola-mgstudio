import React from 'react';
import OlaplexBanner from '../../components/palvelut/olaplex/OlaplexBanner';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import OlaplexHintalista from '../../components/palvelut/olaplex/OlaplexHinnasto';

const olaplex = () => {
  return (
    <Layout>
      <SEO title="Olaplex Salonkihoito Helsinki, Malminkartano" />
      <OlaplexBanner />
      <OlaplexHintalista />
      <Footer />
    </Layout>
  );
};

export default olaplex;
