import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerHintalista';
import Title from '../../components/Title';

import Hintalista from '../../components/hintalista/Hintalista';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner />
    <Title as="h1" title="Hintalista" />
    <Hintalista />
  </Layout>
);

export default IndexPage;
