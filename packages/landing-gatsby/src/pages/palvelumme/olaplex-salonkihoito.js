import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import OlaplexBanner from '../../components/palvelut/olaplex/OlaplexBanner';
import Title from '../../components/Title';
import OlaplexBannerNarrow from '../../components/palvelut/olaplex/OlaplexBannerNarrow';
import OlaplexHintalista from '../../components/palvelut/olaplex/OlaplexHinnasto';
import OlaplexTextContent from '../../components/palvelut/olaplex/OlaplexTextContent';

const olaplex = () => {
  return (
    <Layout>
      <SEO
        title="Olaplex hiusten suojaus"
        description="Olaplex-hiustenhoito takaa että hiuksesi eivät enää missään tapauksessa mene heikkoon kuntoon niitä värjättäessä, vaalennettaessa sekä tehtäessä rakennekäsittelyjä. "
      />
      <OlaplexBannerNarrow />
      <OlaplexBanner style={{ paddingBottom: '3em' }} />
      <Title as="h1" title="Olaplex Salonkihoito" />
      <OlaplexHintalista />
      <OlaplexTextContent />
    </Layout>
  );
};

export default olaplex;
