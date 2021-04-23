import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerPages';
import Title from '../../components/Title';
import MyMap from '../../components/leaflet/Leaflet';

import 'leaflet/dist/leaflet.css';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner />
    <Title as="h1" title="Yheteystiedot" />
    <MyMap />
  </Layout>
);

export default IndexPage;
