import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerHintalista';
import Title from '../../components/Title';

import Hintalista from '../../components/hintalista/Hintalista';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kauneuspalveluiden hinnasto"
      description="MG Studion kauneuspalveluiden hintalista.Kaikki hinnat palveluista kuten kampaaja, hieronta, jalkahoito, geelilakkaus, kasvohoito, ripsien ja kulmien värjäus. "
    />
    <Banner />
    <Title as="h1" title="Hintalista" />
    <Hintalista />
  </Layout>
);

export default IndexPage;
