import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';

import Banner from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaBannerNarrow';
import Hintalista from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaHinnasto';
import TextContent from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaTextContent';

const IndexPage = () => (
  <Layout>
    <SEO title="Hemmotteleva kuumakivihieronta Helsinki, Malminkartano " />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Kuumakivihieronta" />
    <Hintalista />
    <TextContent />
    <Footer />
  </Layout>
);

export default IndexPage;
