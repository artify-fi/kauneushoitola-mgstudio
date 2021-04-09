import React from 'react';
import { Link } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import Image1 from '../../../images/palvelut/miesten_hiusten_leikkaus.jpg';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image1}
              alt="miesten hiusten leikkaus vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading
              as="h2"
              className="heading"
              content="Miesten hiusten leikkaus"
            />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me with a healthy green glow…and left me as impotent as a Nevada boxing commissioner.'
            />
            <Link href="/palvelumme/hemmotteleva-kuumakivihieronta/">
              <Button title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
