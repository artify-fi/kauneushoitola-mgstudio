import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layoutPage';
import SEO from '../../components/SEO';
import Footer from '../../containers/AppModern/FooterMap';

import Banner from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatBannerNarrow';
import Hintalista from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatHintalista';
import TextContent from '../../components/palvelut/ripsetjakulmat/RipsetJaKulmatTextContent';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kauniit ripset & kulmat MG Studio Kauneushoitola Martinlaakso"
      description="Ammattimainen hoito juuri Sinulle."
    />
    <BannerNarrow />
    <Banner />
    <Title as="h1" title="Ripset & Kulmat" />
    <Hintalista />
    <TextContent />
    <Footer />
  </Layout>
);

export default IndexPage;
