import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import { Link } from 'gatsby';

import BannerSection, {
  ContentWrapper,
  BannerContent,
  DomainChecker,
  DomainControl,
  BannerImage,
} from './banner.style';

//import illustration from '../../../images/woman-customer.webp';
import illustration from '../../../images/infograaf_hakukonemarkkinointi.webp';

const options = [
  { label: '.COM', value: 'dot-com' },
  { label: '.NET', value: 'dot-net' },
  { label: '.ORG', value: 'dot-org' },
];

const Banner = () => {
  return (
    <BannerSection id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <h2 style={{ color: 'red' }}>TESTISIVU</h2>
            <Heading
              as="h1"
              content="Miten paikallinen hakukonenäkyvyys ja verkkoanalytiikka tukevat uusien asiakkaiden tavoittamista?"
            />
            <Text
              as="h2"
              content="Kiinnostako Sinua kotisivusi tämänhetkinen toimivuus sekä näkyvyys Google hakukonessa?"
            />

            <Text
              as="h2"
              style={{
                color: '#e05a35',
                fontSize: '1.6em',
                marginTop: '-0.6em',
              }}
              content="Tilaa ilmainen verkkoanalyysi. "
            />
            <DomainChecker>
              <DomainControl>
                <form
                  className="contact-form"
                  name="testing-contact"
                  method="post"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                  action="/success"
                >
                  <input type="hidden" name="bot-field" />
                  <input
                    type="hidden"
                    name="form-name"
                    value="testing-contact"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Kotisivun URL"
                    className="form-control"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Sähköposti"
                    className="form-control"
                  />
                  <button
                    type="submit"
                    className="btn form-control submit-btn"
                    alt="ilmainen verkkoanalyysi"
                  >
                    <label>Haluan verkkoanalyysiin sähköpostiini</label>
                  </button>
                  <Link
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '7px',
                    }}
                    to="/palvelut/yhteenveto/"
                  >
                    <Button
                      className="form-control"
                      title="Lue lisää tarjouksesta"
                      style={{ color: '#fff' }}
                      type="submit"
                      alt="lue ilmaisesta verkkoanalyysista"
                    />
                  </Link>
                </form>
              </DomainControl>
            </DomainChecker>
          </BannerContent>
          <BannerImage>
            <Image
              src={illustration}
              style={{ width: '38vw', height: 'auto' }}
              alt="Infographic about road to the clients"
            />
          </BannerImage>
        </ContentWrapper>
      </Container>
    </BannerSection>
  );
};

export default Banner;
