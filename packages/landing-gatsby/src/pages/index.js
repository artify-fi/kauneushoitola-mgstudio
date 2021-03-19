import React from 'react';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Banner from '../containers/AppModern/Banner';
import FeatureSection from '../containers/Agency/FeatureSection';
import Pricing from '../containers/Agency/Pricing';
import FaqSection from '../containers/Agency/FaqSection';
import NewsletterSection from '../containers/Agency/NewsletterSection';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <SEO title="MG Studio" />
      <ResetCSS />
      <GlobalStyle />
      <AgencyWrapper>
        <Banner />
        {/* <FeatureSection /> */}
        {/* <Pricing />
        <FaqSection />
        <NewsletterSection /> */}
      </AgencyWrapper>
    </Layout>
  );
};
