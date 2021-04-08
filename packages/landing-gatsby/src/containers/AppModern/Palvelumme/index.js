import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Container from 'common/src/components/UI/ContainerTwo';
import Heading from 'common/src/components/Heading';
import {
  FaDiagnoses,
  FaCut,
  FaHandPaper,
  FaSignLanguage,
  FaRegGrinBeam,
  FaRegGrinStars,
  FaRegGrinAlt,
  FaWalking,
} from 'react-icons/fa';
import Image from 'common/src/components/Image';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
  descriptionBold,
} from './workHard.style';

import illustration from 'common/src/assets/image/agencyModern/mg-studio-logo-large.png';

const Palvelumme = () => {
  return (
    <SectionWrapper>
      <Container>
        <Heading
          style={{ textAlign: 'center' }}
          className="palvelumme"
          as="h2"
          content="PALVELUMME"
        />
        <Section>
          <Content>
            <ListGroup>
              <Link
                className="explore"
                href="/palvelumme/naisten-hiusten-leikkaus/"
              >
                <FaCut className="icon" />
                <Heading as="h3" content="Kampaamo-Parturi" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/ripset-kulmat/">
                <FaRegGrinAlt className="icon" />
                <Heading as="h3" content="Ripsienpidennykset" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/ripset-kulmat/">
                <FaRegGrinBeam className="icon" />
                <Heading as="h3" content="Kulmien värjäykset" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/ripset-kulmat/">
                <FaRegGrinStars className="icon" />
                <Heading as="h3" content="Ripsien värjäykset" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/kynnet/">
                <FaHandPaper className="icon" />
                <Heading as="h3" content="Geelilakkaukset" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/kynnet/">
                <FaHandPaper className="icon" />
                <Heading as="h3" content="Rakennekynnet" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/kynnet/">
                <FaSignLanguage className="icon" />
                <Heading as="h3" content="Käsihoidot" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/jalkahoito/">
                <FaWalking className="icon" />
                <Heading as="h3" content="Jalkahoitot" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/hieronta/">
                <FaDiagnoses className="icon" />
                <Heading as="h3" content="Klassinen Hieronta" />
              </Link>
              <br />

              <Link className="explore" href="/palvelumme/hieronta/">
                <FaDiagnoses className="icon" />
                <Heading as="h3" content="Urheiluhieronta" />
              </Link>
              <br />

              <Link
                className="explore"
                href="/palvelumme/hemmotteleva-kuumakivihieronta/"
              >
                <FaDiagnoses className="icon" />
                <Heading as="h3" content="Kuumakivihieronta" />
              </Link>
            </ListGroup>
          </Content>
          <Illustration>
            <Image
              style={{ maxWidth: '36vw' }}
              src={illustration}
              alt="Illustration"
            />
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

Palvelumme.propTypes = {
  sectionWrapper: PropTypes.object,
  descriptionBold: PropTypes.object,
};

Palvelumme.defaultProps = {
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
};

export default Palvelumme;
