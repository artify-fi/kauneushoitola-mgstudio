import React from 'react';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import SEO from '../components/seo';
import Layout from '../components/layout';

import Banner from '../containers/AppModern/Banner';
import NewsletterSection from '../containers/AppModern/Newsletter';
import MainHeading from '../components/MainHeading';
import Palvelumme from '../containers/AppModern/MeidanPalvelut';
import Information from '../containers/AppModern/MilestoneBlock';
import '@redq/reuse-modal/es/index.css';

export default () => {
  return (
    <Layout>
      <SEO
        title="Kauneus- ja hyvinvointipalvelut"
        description="MG Studiosta saat monipuolista palvelua, joka on tarkoitettu juuri Sinulle! Meidän käsissä saat levähtää turvallisesti ja rentoutua arjen keskellä. Laajasta palveluvalikoimasta löydät muun muassa kampaajan, ripsiteknikon, kynsiteknikon, hierojan ja jalkahoitajan palveluja."
      />
      <ResetCSS />
      <GlobalStyle />
      <AgencyWrapper>
        <Banner />
        <NewsletterSection />
        <Information />
        <MainHeading />
        <Palvelumme />
      </AgencyWrapper>
    </Layout>
  );
};
