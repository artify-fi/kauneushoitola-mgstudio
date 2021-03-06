import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import NewsletterWrapper from './newsletter.style';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Newsletter = ({ title, description, descriptionBold }) => {
  const classes = useStyles();
  return (
    // <Box {...sectionWrapper} as="section">
    <NewsletterWrapper>
      <Container>
        <Box>
          <Heading
            as="h2"
            style={{ textTransform: 'none' }}
            content="Kauneushotolasta MG Stuido saat monipuolista"
            {...title}
          />
          <Heading
            as="h2"
            style={{ textTransform: 'none' }}
            content=" palvelua, joka on tarkoitettu juuri Sinulle!"
            {...title}
          />
          <Text
            content="Meidän palveluiden valikoimasta löydät jalkahoidon, hieronnan, geelilakkauksen, ripsienpidennykset sekä hiusten värjäyksen. Tervetuloa tutustumaan!"
            {...description}
          />
          <br />
          <Text content="Ajanvaraus puhelimitse " {...descriptionBold} />
          {/* <Text content="0400 9790 51 " {...descriptionPink} /> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1em',
            }}
          >
            <a href="tel:+358400979051" aria-label="Call easily to MG Studio">
              {' '}
              <Button
                style={{
                  backgroundColor: '#ff3f66',
                  border: '6px solid black',
                  fontSize: '1rem',
                }}
                variant="contained"
                color="#000"
                size="small"
                className={classes.button}
                startIcon={<PhoneIcon style={{ fontSize: '1em' }} />}
              >
                (+358) 0400 9790 51
              </Button>
            </a>
          </div>
          <Text
            content="(jos emme pääse vastaamaan puhelimeen, soitamme sinulle takaisin mahdollisimman pian.)  "
            {...description}
          />
          <Text
            content="tai helposti ja vaivattomasti netin kautta 24/7 "
            {...descriptionBold}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1em',
            }}
          >
            <a
              href="https://varaa.timma.fi/MGstudio"
              aria-label="Varaa helposti aika netista"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {' '}
              <Button
                style={{
                  backgroundColor: '#ff3f66',
                  border: '6px solid black',
                  fontSize: '1rem',
                }}
                variant="contained"
                color="#000"
                size="small"
                aria-label="Reserve easily free time to MG Studio"
                className={classes.button}
                startIcon={<EventAvailableIcon style={{ fontSize: '1em' }} />}
              >
                Nettiajanvaraus
              </Button>
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
    fontSize: ['1.6rem', '2rem', '2.2rem', '2.4rem', '2.6rem'],
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Playfair Display',
    lineHeight: '1.34em',
    mt: ['0.2em', '0.2em', '0.2em'],
    textAlign: ['center'],
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: ['1.1rem', '1.3rem'],
    maxWidth: ['100%', '800px'],
    fontWeight: '400',
    color: '#1c273d',
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
    color: '#ff3f66',
    lineHeight: '1.7',
    fontFamily: 'Playfair Display',
    mb: 0,
    textAlign: ['center'],
  },
};

export default Newsletter;
