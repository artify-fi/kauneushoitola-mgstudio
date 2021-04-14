import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import OlaplexBanner from '../../components/palvelut/olaplex/OlaplexBanner';
import OlaplexBannerNarrow from '../../components/palvelut/olaplex/OlaplexBannerNarrow';
import OlaplexHintalista from '../../components/palvelut/olaplex/OlaplexHinnasto';
import OlaplexTextContent from '../../components/palvelut/olaplex/OlaplexTextContent';

const olaplex = () => {
  return (
    <Layout>
      <SEO title="Olaplex Salonkihoito Helsinki, Malminkartano" />
      <OlaplexBannerNarrow />
      <OlaplexBanner />
      <OlaplexHintalista />
      <OlaplexTextContent />
      <Footer />
    </Layout>
  );
};

export default olaplex;
