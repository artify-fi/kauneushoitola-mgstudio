import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';

import NewsletterWrapper from './newsletter.style';

const Newsletter = ({
  sectionWrapper,
  textArea,
  title,
  description,
}) => {
  return (
    // <Box {...sectionWrapper} as="section">
      <NewsletterWrapper>
        <Container>
          <Box {...textArea}>
            <Heading content="MG Studio Kauneushoitola" {...title} />
            <Text
              content="MG Studiosta saat monipuolista palvelua, joka on tarkoitettu juuri Sinulle! MG Studion tiimi koostuu kauneus- ja hyvinvointialojen asiantuntijoista, joiden käsissä saat levähtää turvallisesti ja rentoutua arjen keskellä. Laajasta palveluvalikoimasta löydät muun muassa parturi-kampaajan, ripsiteknikon, kynsiteknikon, hierojan ja jalkahoitajan palveluja."
              {...description}
            />
          </Box>         
        </Container>
      </NewsletterWrapper>
    // </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  // textArea: {
  //   mb: ['40px', '40px', '40px', '0', '0'],
  //   pr: ['0', '0', '0', '80px', '100px'],
  // },
  title: {
    fontSize: ['1.3rem', '1.4rem', '1.5rem', '1.6rem', '1.7rem'],
    fontWeight: '500',
    color: '#4f5a75',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center'],
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: ['1.1rem', '1.4rem'],
    maxWidth: ['100%', '800px'],
    fontWeight: '400',
    color: '#2d3a56',
    lineHeight: '1.5',
    mb: 0,
    textAlign: ['center'],
  },  
};

export default Newsletter;
