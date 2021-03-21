import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerPages'
import Title from '../../components/Title'
import UnderConstructor from '../../components/UnderConstruction'


const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner />   
    <Title as='h1' title="Yheteystiedot" /> 
    <UnderConstructor />  
  </Layout>
);

export default IndexPage;