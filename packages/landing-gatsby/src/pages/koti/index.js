import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerPages';
import Title from '../../components/Title';
import UnderConstructor from '../../components/UnderConstruction';
import AMap from '../../components/map/AMap';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner />
    <Title as="h1" title="Etusivu" />
    <AMap />
    <UnderConstructor />
  </Layout>
);

export default IndexPage;
