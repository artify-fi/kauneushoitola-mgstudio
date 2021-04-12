import React from 'react';
import OlaplexBanner from '../../components/palvelutBanners/OlaplexBanner';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

const olaplex = () => {
  return (
    <Layout>
      <SEO title="Olaplex Salonkihoito Helsinki, Malminkartano" />
      <OlaplexBanner />
      <Footer />
    </Layout>
  );
};

export default olaplex;
