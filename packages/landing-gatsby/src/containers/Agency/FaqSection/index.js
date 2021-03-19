import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { ContentWrapper, FaqItem } from './faq.style';

const FaqSection = () => {
  const data = useStaticQuery(graphql`
    query {
      hostingModernJson {
        faqs {
          id
          title
          desc
        }
      }
    }
  `);
  return (
    <SectionWrapper id="faq">
      <Container>
        <Fade up delay={100}>
          <SectionHeading
            as="h2"
            slogan="Ihanteelliset ratkaisut juuri sinulle"
            title="UKK - usein kysytyt kysymykset"
          />
        </Fade>
        <ContentWrapper>
          {data.hostingModernJson.faqs.map((faq) => (
            <Fade key={faq.id} up delay={100 * faq.id}>
              <FaqItem>
                <Heading as="h3" content={faq.title} />
                <Text content={faq.desc} />
              </FaqItem>
            </Fade>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FaqSection;
