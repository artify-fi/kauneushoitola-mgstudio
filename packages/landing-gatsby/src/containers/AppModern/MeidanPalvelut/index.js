import React from 'react';
import { Link } from 'gatsby';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import { StaticImage } from 'gatsby-plugin-image';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="palvelut">
      <Container>
        {/* Heading of the section */}
        <ContentWrapper style={{ marginTop: '-1em' }}>
          <StaticImage
            src="../../../images/palvelut/palvelut_kampaaja_oppilastyo.webp"
            alt="naisten hiusten leikkaus vantaa malminkartano"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />

          <div className="content">
            <Heading
              as="h3"
              className="heading"
              content="Kampaaja(oppilastyö)"
            />
            <Heading as="h4" className="text" content=" Hiusten värjäys" />
            <Heading
              style={{ marginTop: '0.2rem' }}
              as="h4"
              className="text"
              content="Hiusten leikkaus"
            />

            <Link
              to="/palvelumme/kampaaja/"
              className="explore"
              tabindex="0"
              activeClassName="active"
              aria-label="Ajanvaraus kampaajalle"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/* 2. Olaplex */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/olaplex.jpeg"
            alt="Olaplex hiusten leikkaus vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />
          <div className="content">
            <Heading
              as="h3"
              className="heading"
              content="Olaplex salonkihoito"
            />
            <Heading
              as="h4"
              className="text"
              content="Mikäli hiuksesi ovat huonossa kunnossa, kuivat tai karheat on niihin uskomaton apu Olaplex-salonkihoidosta.
              Olaplex-salonkihoito voidaan tehdä muun kampaamopalvelun yhteydessä tai voit varata siihen erikseen ajan."
            />
            <Link
              to="/palvelumme/olaplex-salonkihoito/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus olaplex salonkihoitoon"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/*3 Ripset Kulmat Ripsienpidennykset */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/ripset_kulmat_w.webp"
            alt="Ripset Kulmat Ripsienpidennykset vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />
          <div className="content">
            <Heading as="h3" className="heading" content="Ripset & Kulmat" />
            <Heading
              as="h4"
              className="text"
              content="Ripsienpidennys klassiset/ hybrid/ volyymit. Ripsien ja kulmien värjäys sekä muotoilu"
            />
            <Link
              to="/palvelumme/ripset_kulmat/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus ripsien ja kulmien tekniikkolle"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/* 4. Kasvohoito  */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/kasvohoito.webp"
            alt="Kasvohoito vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />
          <div className="content">
            <Heading
              as="h3"
              className="heading"
              content="Kasvohoito (tulossa)"
            />
            <Heading as="h4" className="text" content="" />
            <Link
              to="/palvelumme/kasvohoito/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus kasvohoitoon"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/* 5 Jalkahoito */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/jalkahoito_w.webp"
            alt="Jalkahoito vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />

          <div className="content">
            <Heading as="h3" className="heading" content="Jalkahoito" />
            <Heading
              as="h4"
              className="text"
              content="Perusjalkohoito, Luxus jalkahoito, Jalkahoito geelilakalla"
            />
            <Link
              to="/palvelumme/jalkahoito/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus jalkahoitoon"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/* 5.5 Kynnet */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/kynnet_w.webp"
            alt="kauniit kynnet ja geelilakkaus vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />

          <div className="content">
            <Heading as="h3" className="heading" content="Kynnet" />
            <Heading
              as="h4"
              className="text"
              content="Geelilakkaus, Geelikynnet, Manikyyri, Luxus Manikyyri"
            />
            <Link
              to="/palvelumme/kynnet/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus kynsiteknikolle"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/* 10 Geelilakkaus varpaaisiin */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/geelilakkaus_varpaisiin_w.webp"
            alt="Geelilakkaus varpaaisiin vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />
          <div className="content">
            <Heading
              as="h3"
              className="heading"
              content="Geelilakkaus Varpaisiin"
            />
            <Heading
              as="h4"
              className="text"
              content="Kauniit ja kestävät kynnet kuukausiksi kauneushoitola martinlaakso."
            />
            <Link
              to="/palvelumme/geelilakkaus-varpaisiin/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus varpaiden geelilakkaukseen"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/* 7. Hieronta */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/hemmotteleva_kuumakivi_hieronta_w.webp"
            alt="Hieronta vartalo vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />
          <div className="content">
            <Heading as="h3" className="heading" content="Hieronta" />
            <Heading
              as="h4"
              className="text"
              content="Hieronnasta apua kehon kiputiloihin."
            />
            <Link
              to="/palvelumme/hieronta/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus hieroojalle"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>

        {/* 7. Hemmotteleva kuumakivihieronta */}
        <ContentWrapper>
          <StaticImage
            src="../../../images/palvelut/hieronta_w.webp"
            alt="Hemmotteleva kuumakivihieronta vantaa martinlaakso"
            placeholder="blurred"
            layout="constrained"
            style={{ padding: '3rem', margin: '2rem', borderRadius: '1.4em' }}
            width={400}
            height={400}
          />
          <div className="content">
            <Heading as="h3" className="heading" content="Kuumakivihieronta" />
            <Heading
              as="h4"
              className="text"
              content="Kuumakivihieronta on yksi luonnollisimmista paranemisen muodoista, joka käyttää ainutlaatuista menetelmää maapallon lämpöenergian ohjaamiseksi ihmiskehoon."
            />
            <Link
              to="/palvelumme/hemmotteleva-kuumakivihieronta/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus kuumakivihieronnaan"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
