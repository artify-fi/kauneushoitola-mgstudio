import React from 'react';
import { Link } from 'gatsby';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import Image3 from '../../../images/palvelut/palvelut_kampaaja_oppilastyo.webp';
import Image6 from '../../../images/palvelut/olaplex.jpeg';
import Image7 from '../../../images/palvelut/hemmotteleva_kuumakivi_hieronta_w.webp';
import Image8 from '../../../images/palvelut/hieronta_w.webp';
import Image9 from '../../../images/palvelut/kasvohoito.webp';
import Image10 from '../../../images/palvelut/kynnet_w.webp';
import Image11 from '../../../images/palvelut/jalkahoito_w.webp';
import Image12 from '../../../images/palvelut/ripset_kulmat_w.webp';
import Image13 from '../../../images/palvelut/geelilakkaus_varpaisiin_w.webp';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="palvelut">
      <Container>
        {/* Heading of the section */}
        <ContentWrapper style={{ marginTop: '-1em' }}>
          <div className="image">
            <Image
              className="image"
              src={Image3}
              alt="naisten hiusten leikkaus vantaa malminkartano"
            />
          </div>

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
          <div className="image">
            <Image
              className="image"
              src={Image6}
              alt="Olaplex hiusten leikkaus vantaa martinlaakso"
            />
          </div>
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
          <div className="image">
            <Image
              className="image"
              src={Image12}
              alt="Ripset Kulmat Ripsienpidennykset vantaa martinlaakso"
            />
          </div>
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
          <div className="image">
            <Image
              className="image"
              src={Image9}
              alt="Kasvohoito vantaa martinlaakso"
            />
          </div>
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
          <div className="image">
            <Image
              className="image"
              src={Image11}
              alt="Jalkahoito vantaa martinlaakso"
            />
          </div>
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
          <div className="image">
            <Image
              className="image"
              src={Image10}
              alt="Jalkahoito vantaa martinlaakso"
            />
          </div>
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
          <div className="image">
            <Image
              className="image"
              src={Image13}
              alt="Kynnet vantaa martinlaakso"
            />
          </div>
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
          <div className="image">
            <Image
              className="image"
              src={Image8}
              alt="Hieronta vartalo vantaa martinlaakso"
            />
          </div>
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
          <div className="image">
            <Image
              className="image"
              src={Image7}
              alt="Hemmotteleva kuumakivihieronta vantaa martinlaakso"
            />
          </div>
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
