import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';

import Banner from '../../components/palvelut/jalkahoito/JalkahoitoBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/jalkahoito/JalkahoitoBannerNarrow';
import Hintalista from '../../components/palvelut/jalkahoito/JalkahoitoHinnasto';
import TextContent from '../../components/palvelut/jalkahoito/JalkahoitoTextContent';

const jalkahoito = () => (
  <Layout>
    <SEO
      title="Jalkojen hoito"
      description="Ammattimainen hoito ongelmallisille ja terveille jaloille ja varpaiden kynsille. Hieronta, jalkakylpy, jalkojen hoitaminen (kynnet, kynsinauhat, kovettumien poisto) ja kynsien lakkaus (perus kynsilakalla) sekä parafiininaamio"
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Jalkahoito" />
    <Hintalista />
    <TextContent />
  </Layout>
);

export default jalkahoito;
