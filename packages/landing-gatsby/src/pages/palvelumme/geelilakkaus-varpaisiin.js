import React from 'react';
import Footer from '../../containers/AppModern/FooterMap';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import Banner from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausBannerNarrow';
import Hintalista from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausHinnasto';
import TextContent from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausTextContent';

const geelilakkausVarpaisiin = () => {
  return (
    <Layout>
      <SEO
        title="Kynsien geelilakkaus"
        description="Manikyyri geelilakalla on sopiva tapa taata kynsien hyvin hoidettu ulkomuoto pitkään ja pienellä vaivalla. Lakkaus pysyy varpaissa tavallisesti lohkeilematta lukuisia kuukausia.  "
      />
      <BannerNarrow />
      <Banner />
      <Title as="h1" title="Geelilakkaus Varpaisiin" />
      <Hintalista />
      <TextContent />
      <Footer />
    </Layout>
  );
};

export default geelilakkausVarpaisiin;
