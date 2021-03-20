import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerPages'
import UnderConstructor from '../../components/UnderConstruction'


const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner />   
  </Layout>
);

export default IndexPage;
