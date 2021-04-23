import React from 'react';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Banner from '../containers/AppModern/Banner';
// import FeatureSection from '../containers/Agency/FeatureSection';
// import Pricing from '../containers/Agency/Pricing';
// import FaqSection from '../containers/Agency/FaqSection';
import EtusivuImages from '../components/etusivu/EtusivuImages';
import NewsletterSection from '../containers/AppModern/Newsletter';
import Footer from '../containers/AppModern/FooterMap';
import Palvelumme from '../containers/AppModern/MeidanPalvelut';
import Information from '../containers/AppModern/MilestoneBlock';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import Layout from '../components/layout';
import MainHeading from '../components/MainHeading';
//import MyMap from '../components/leaflet/Leaflet';

export default () => {
  return (
    <Layout>
      <SEO
        title="Kauneushoitola MG Studio Make you Glow Malminkartano, Helsinki"
        description="MG Studiosta saat monipuolista palvelua, joka on tarkoitettu juuri Sinulle! MG Studion tiimi koostuu kauneus- ja hyvinvointialojen asiantuntijoista, joiden käsissä saat levähtää turvallisesti ja rentoutua arjen keskellä. Laajasta palveluvalikoimasta löydät muun muassa parturi-kampaajan, ripsiteknikon, kynsiteknikon, hierojan ja jalkahoitajan palveluja."
      />
      <ResetCSS />
      <GlobalStyle />
      <AgencyWrapper>
        {/* <SimpleReactLightbox> */}
        <Banner />
        <NewsletterSection />
        <Information />
        {/* <EtusivuImages /> */}
        {/* <FeatureSection /> */}
        {/* <Pricing />
        <FaqSection /> */}
        {/* </SimpleReactLightbox> */}
        <MainHeading />
        <Palvelumme />
        <Footer />
        {/* <MyMap /> */}
      </AgencyWrapper>
    </Layout>
  );
};
