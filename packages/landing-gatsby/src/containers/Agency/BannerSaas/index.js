/* eslint-disable */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';

import BannerWrapper, {
  BannerContent,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from '../../../images/woman-customer.webp';
import circleBorder from 'common/src/assets/image/appModern/shape.svg';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);

  const { client } = data.appModernJson;

  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <FeatureBlock
              title={
                <Heading content="Miten digitaalinen markkinointi ja verkkoanalytiikka tukevat uusien asiakkaiden tavoittamista?" />
              }
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              style={{
                color: '#354d64',
                fontSize: '1.4rem',
                fontFamily: 'Raleway',
                fontWeight: 500,
                lineHeight: '30px',
              }}
              content="Google rakastaa sinua vain silloin, kun kaikki muut rakastavat ensin."
            />
            <Text content="Wendy Piersall" />

            {/* <Text
              style={{ color: "#27628e", padding: '0.4em', backgroundColor: '#b4cadb' }}
              content="Teknisesti laadukaat sekä mobiili- että hakukoneoptimoidut GatsbyJS kehitystyökalulla luodut
              kotisivut parantavat näkyvyyttä  ja lisäävät huomattavasti kävijöiden määrää.."
            /> */}
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              {/* <Button className="primary" title="Start Free trail" /> */}
              <Button
                backgroundColor="#ef8009"
                color="#fff"
                variant="textButton"
                // icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Lue lisää GatsbyJS kotisivuista"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage
          style={{ zIndex: '-1', maxWidth: '36vw', marginTop: '2vh' }}
        >
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Woman saying hello to new client" />
          </Fade>
        </BannerImage>
      </Container>
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};
export default Banner;
