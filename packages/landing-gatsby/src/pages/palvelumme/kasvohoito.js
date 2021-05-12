import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import Banner from '../../components/palvelut/kasvohoito/KasvohoitoBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kasvohoito/KasvohoitoBannerNarrow';
import Hintalista from '../../components/palvelut/kasvohoito/KasvohoitoHinnasto';
import TextContent from '../../components/palvelut/kasvohoito/KasvohoitoTextContent';

const kasvohoito = () => {
  return (
    <Layout>
      <SEO
        title="Kasvojen hoito"
        description="Meillä voit nauttia kosmetologin palveluista. Korostamme aina laatua ja asiakkaiden mukavuutta yksityisissä ja viihtyisissä huoneissa. Koristekosmetiikan alaan kuuluvat kehoa korostavat tekniikat (mukaan lukien hygienia) ja meikki, joiden tarkoituksena on havainnollistaa ulkonäköä, korostaa persoonallisuutta ja piilottaa kauneusvirheet muotivaatimusten mukaisesti."
      />
      <BannerNarrow />
      <Banner />
      <Title as="h1" title="Kasvohoito" />
      <Hintalista />
      <TextContent />
    </Layout>
  );
};

export default kasvohoito;
