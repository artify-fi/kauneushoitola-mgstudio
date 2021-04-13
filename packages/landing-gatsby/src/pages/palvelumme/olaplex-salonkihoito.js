import React from 'react';
import OlaplexBanner from '../../components/palvelutBanners/OlaplexBanner';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import PhoneButtom from '../../components/logo/PhoneButton';

const olaplex = () => {
  return (
    <Layout>
      <SEO title="Olaplex Salonkihoito Helsinki, Malminkartano" />
      <OlaplexBanner />
      <PhoneButtom />
      <Footer />
    </Layout>
  );
};

export default olaplex;
