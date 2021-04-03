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
  descriptionBold,
  descriptionPink,
  link,
}) => {
  return (
    // <Box {...sectionWrapper} as="section">
    <NewsletterWrapper>
      <Container>
        <Box {...textArea}>
          <Heading
            style={{ marginTop: '1em' }}
            content="MG Studio Kauneushoitola"
            {...title}
          />
          <Text
            content="MG Studiosta saat monipuolista palvelua, joka on tarkoitettu juuri Sinulle! MG Studion tiimi koostuu kauneus- ja hyvinvointialojen asiantuntijoista, joiden käsissä saat levähtää turvallisesti ja rentoutua arjen keskellä. Laajasta palveluvalikoimasta löydät muun muassa parturi-kampaajan, ripsiteknikon, kynsiteknikon, hierojan ja jalkahoitajan palveluja."
            {...description}
          />
          <br />
          <Text content="Ajanvaraus puhelimitse " {...descriptionBold} />
          <Text content="0400 9790 51 " {...descriptionPink} />
          <Text
            content="tai helposti ja vaivattomasti netin kautta 24/7 "
            {...descriptionBold}
          />
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <a
              href="https://varaa.timma.fi/MGstudio"
              target="_blank"
              rel="noopener norefferer"
              className="link"
            >
              MG Studio
            </a>
          </div>
          <Text
            content="Jos ei löydy sopiva aika, niin soitta!"
            {...descriptionBold}
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
    color: '#BD5F91',
    lineHeight: '1.34em',
    mt: ['2em', '3.4em', '3.8em'],
    mb: ['1.6em', '2.2em', '2.6em'],
    textAlign: ['center'],
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: ['1rem', '1.3rem'],
    maxWidth: ['100%', '800px'],
    fontWeight: '400',
    color: '#2d3a56',
    fontFamily: 'Playfair Display',
    lineHeight: '1.5',
    mb: 0,
    textAlign: ['center'],
  },
  descriptionBold: {
    fontSize: ['1.1rem', '1.4rem'],
    maxWidth: ['100%', '800px'],
    fontWeight: '700',
    color: '#141c2d',
    lineHeight: '1.7',
    fontFamily: 'Playfair Display',
    mb: 0,
    textAlign: ['center'],
  },
  descriptionPink: {
    fontSize: ['1.1rem', '1.4rem'],
    maxWidth: ['100%', '800px'],
    fontWeight: '700',
    color: '#BD5F91',
    lineHeight: '1.7',
    fontFamily: 'Playfair Display',
    mb: 0,
    textAlign: ['center'],
  },
};

export default Newsletter;
