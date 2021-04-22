import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerPages';
import Title from '../../components/Title';
import UnderConstructor from '../../components/UnderConstruction';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Jalkahoito MG Studio Kauneushoitola Martinlaakso"
      description="Nykyaikaise salamannopeatt kotisivut ja mobiilisovellukset mikä tukevat
         nopeudella ja suorituskyvyllä asiakkaiden sitoutumista ja myyntiä. "
    />
    <Banner />
    <Title as="h1" title="Jalkahoito" />
    <UnderConstructor />
  </Layout>
);

export default IndexPage;
