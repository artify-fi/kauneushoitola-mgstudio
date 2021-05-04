import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Banner from '../../containers/AppModern/BannerYhteystiedot';
import Title from '../../containers/AppModern/BannerYhteystiedot/Title';
//import MyMap from '../../components/leaflet/Leaflet';

import 'leaflet/dist/leaflet.css';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kauneushoitolan yhteystiedot"
      description="Käyntiosoite Tuohiaukio 4, 00410, Helsinki, Malminkartano. Puhelinnumero 0400 9790 51 Ajanvaraus netin kautta https://varaa.timma.fi/MGstudio Facebook: https://www.facebook.com/MGstudioFinland  Instagram: https://www.instagram.com/mgstudiofinland"
    />
    <Banner />
    <Title as="h1" title="Yheteystiedot" />
  </Layout>
);

export default IndexPage;
