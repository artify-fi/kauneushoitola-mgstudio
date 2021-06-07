import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';

import Banner from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaBannerNarrow';
import Hintalista from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaHinnasto';
import TextContent from '../../components/palvelut/kuumakivihieronta/KuumakiviHierontaTextContent';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hemmotteleva kuumakivihieronta"
      description="Laavakivi- tai kuumakivihieronta on yksi luonnollisimmista palautumisen muodoista, joka käyttää ainutlaatuista menetelmää maapallon lämpöenergian ohjaamiseksi ihmiskehoon."
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Kuumakivihieronta" />
    <Hintalista />
    <TextContent />
  </Layout>
);

export default IndexPage;
