import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';

import SectionWrapper, { Section, Content1, Content2 } from './styleContent';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content1></Content1>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
