import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';

import Banner from '../../components/palvelut/hieronta/HierontaBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/hieronta/HierontaBannerNarrow';
import Hintalista from '../../components/palvelut/hieronta/HierontaHinnasto';
import TextContent from '../../components/palvelut/hieronta/HierontaTextContent';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hieronnan avulla onneliseksi."
      description="Rentouttava hieronta auttaa sinua unohtamaan stressin ja jännityksen.Hieronta on hoitotapahtuma, jonka tavoitteena on lisätä kudosten aineenvaihduntaa ja parantaa verenkiertoa."
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Hieronta" />
    <Hintalista />
    <TextContent />
    <Footer />
  </Layout>
);

export default IndexPage;
