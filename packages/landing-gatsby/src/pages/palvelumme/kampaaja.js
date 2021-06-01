import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import Banner from '../../components/palvelut/kampaaja/KampaajaBanner';
import Title from '../../components/Title';
import BannerNarrow from '../../components/palvelut/kampaaja/KampaajaBannerNarrow';
import Hintalista from '../../components/palvelut/kampaaja/KampaajaHinnasto';
import TextContent from '../../components/palvelut/kampaaja/KampaajaTextContent';

const kampaaja = () => {
  return (
    <Layout>
      <SEO
        title="Hiusten leikkaus (oppilastyö)"
        description="Kampaajat ovat myös paikka sosiaaliselle vuorovaikutukselle ja julkiselle keskustelulle. Joissakin tapauksissa kampaajat ovat myös julkisia foorumeita. Nämä ovat paikkoja avoimelle keskustelulle, ilmaista yleisön huolenaiheita ja saada kansalaiset mukaan keskusteluun tämän päivän aiheista."
      />
      <BannerNarrow />
      <Banner />
      <Title as="h1" title="Kampaaja (oppilastyö)" />
      <Hintalista />
      <TextContent />
    </Layout>
  );
};

export default kampaaja;
