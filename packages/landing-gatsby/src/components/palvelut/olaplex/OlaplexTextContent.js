import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';

import SectionWrapper, { Section, Content1, Content2 } from './footerMap';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1>
            <Heading
              as="h1"
              content="Olaplex – Ei enää ikinä vahingoittuneita hiuksia"
            />

            <Text content="" />
            <Text content="" />
            <Text content="" />
            <Text content="" />
            <Text content="" />
            <Text content="" />
            <Text content="" />
            <Text content="" />
            <Text content="" />
          </Content1>
          <Content2></Content2>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
