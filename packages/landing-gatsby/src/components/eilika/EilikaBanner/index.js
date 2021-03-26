import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from 'react-icons-kit';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SocialProfile from '../SocialProfile';
import BannerWrapper from './banner.style';

import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight';
import PersonImage from 'common/src/assets/image/portfolio/woman2.jpg';

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        SOCIAL_PROFILES {
          icon
          url
        }
      }
    }
  `);

  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Terve, olen" {...greetingStyle} />
            <Heading content="Eilika" {...nameStyle} />
            <Heading
              content="Töötan MG Studios kellena ...."
              {...designationStyle}
            />
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: '#3444f1' }}
                size={22}
              />
              <Heading
                content="Miskit iseloomustavat veel ehk .."
                {...roleStyle}
              />
            </Box>
            <Text
              content="Son, a woman is like a beer. They smell good, they look good, you'd step over your own mother just to get one! But you can't stop at one. You wanna drink another woman! Your guilty consciences may make you vote Democratic, but secretly you all yearn for a Republican president to lower taxes, brutalize criminals, and rule you like a king!"
              {...aboutStyle}
            />
            <SocialProfile items={Data.portfolioJson.SOCIAL_PROFILES} />
          </Box>
          <Box {...imageArea} className="image_area">
            <Image src={PersonImage} alt="Mat Helme" />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px',
  },
};

export default BannerSection;
