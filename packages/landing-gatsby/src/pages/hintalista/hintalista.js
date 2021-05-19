import React from 'react';
import '../../css/main.css';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import BannerNarrow from '../../components/palvelut/geelilakkausVarpaisiin/GeelilakkausBannerNarrow';

// import Banner from '../../containers/AppModern/BannerHintalista';
//import Title from '../../components/Title';

import Hintalista from '../../components/hintalista/Hintalista';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kauneuspalveluiden hinnasto"
      description="MG Studion kauneuspalveluiden hintalista.Kaikki hinnat palveluista kuten kampaaja, hieronta, jalkahoito, geelilakkaus, kasvohoito, ripsien ja kulmien värjäus. "
    />
    <BannerNarrow />
    <Wrapper>
      <StaticImage
        src="../../images/Kauneushoitola-MG-Studio-Malminkartano-Helsinki-Logo.jpg"
        alt="Kauneushoitola-MG-Studio-kampaaja-hieroja-jalkahoito-kynnet-Malminkartano-Helsinki"
        placeholder="tracedSVG"
        layout="constrained"
        className="example-img"
        as="div"
      />
    </Wrapper>

    {/* <BannerNarrow />
    <Banner /> */}
    {/* <Title as="h1" title="Hintalista" /> */}
    <Hintalista />
  </Layout>
);

const Wrapper = styled.section`
  width: 100vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  @media (min-width: 768px) {
    height: 420px;
  }
  @media (min-width: 991px) {
    height: 520px;
  }
  @media (min-width: 1199px) {
    height: 620px;
  }
`;

export default IndexPage;
