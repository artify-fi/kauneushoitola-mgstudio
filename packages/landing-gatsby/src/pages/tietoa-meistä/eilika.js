import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerPages';
import Title from '../../components/Title';
import UnderConstructor from '../../components/UnderConstruction';
import SimpleReactLightbox from 'simple-react-lightbox';
import EilikaImages from '../../components/eilika/EilikaImages';
import EilikaBanner from '../../components/eilika/EilikaBanner';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner />
    <Title as="h1" title="Eilika" />
    <EilikaBanner />
    <SimpleReactLightbox>
      <EilikaImages />
    </SimpleReactLightbox>
    <UnderConstructor />
  </Layout>
);

export default IndexPage;
