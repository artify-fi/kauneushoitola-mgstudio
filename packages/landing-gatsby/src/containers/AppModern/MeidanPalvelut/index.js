import React from 'react';
import { Link } from 'gatsby';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from '../../../components/carousel/Carousel';
import { display } from 'styled-system';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="palvelut">
      <Container>
        {/*1. Kampaaja */}
        <ContentWrapper
        // style={{ marginBottom: '3rem', }}
        >
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

          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../components/palvelut/kampaaja/images/mgstudio_malminkartano_helsinki_kampaaja_hiusten_leikkaus.jpg"
                alt="Hiusten_leikkaus_ja_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kampaaja/images/Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_hiusten_valkaisu.webp"
                alt="Hiusten_leikkaus_ja_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kampaaja/images/Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_hiusten_valkaisu_leikkaus_otsatukka.webp"
                alt="Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_hiusten_valkaisu_leikkau_otsatukka"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kampaaja/images/Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_raidat.webp"
                alt="Hiusten_raidat_Hiusten_leikkaus_ja_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kampaaja/images/Kampaaja_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_hiusten_valkaisu_leikkau.jpeg"
                alt="Hiusten-leikkaus-värjäys-valkaisu-Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
            </Carousel>
          </div>
        </ContentWrapper>

        {/*2. Ripset Kulmat Ripsienpidennykset */}
        <ContentWrapper
        // style={{
        //   marginBottom: '3rem',
        // }}
        >
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
          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../components/palvelut/ripsetjakulmat/images/Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki.webp"
                alt="Ripsienpidennys_kulmien_muotoilu_värjäys_Kauneushoitola_MG_Studio_Helsinki_Malminkartan_Myyrmaki_Haaga_Pitajanmaki"
              />
              <StaticImage
                src="../../../components/palvelut/ripsetjakulmat/images/Kauneushoitola-mgstudio-malminkartano-ripset-kulmat-volyymiripset.webp"
                alt="ripset-kulmat-volyymiripset-Kauneushoitola-mgstudio-malminkartano-myyrmaki-haaga-helsinki"
              />
            </Carousel>
          </div>
        </ContentWrapper>

        {/*3. Jalkahoito */}
        <ContentWrapper
        // style={{
        //   marginBottom: '3rem',
        // }}
        >
          <div className="content" style={{ marginBottom: '-2rem' }}>
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
          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../components/palvelut/jalkahoito/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_kauniit_jalat_meiltä.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_kauniit_jalat_meiltä"
                placeholder="blurred"
                layout="constrained"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/jalkahoito/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_jalatallat.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Myyrmäki_Kannelmäki_jalatallat_kaikille_kesäkuntoon"
                placeholder="blurred"
                layout="constrained"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/jalkahoito/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_naisille.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_naisille"
                placeholder="blurred"
                layout="constrained"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/jalkahoito/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_punaiset_geelikynnet.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_punaiset_geelikynnet"
                placeholder="blurred"
                layout="constrained"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/jalkahoito/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_vanhoilli_ihmisille.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_vanhoilli_ihmisille_kesäksi"
                placeholder="blurred"
                layout="constrained"
              />
            </Carousel>
          </div>
        </ContentWrapper>

        {/*4. Kynnet */}
        <ContentWrapper>
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

          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../components/palvelut/kynnet/images/kynsien-geelilakkaus-kauneushoitola-mgstudio-malminkartano-helsinki.jpeg"
                alt="Geelilakkaus-manikyyri-kauneushoitola-malminkartano"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kynnet/images/Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_Geelilakkaus_Luxusmanikyyri_kynsien_leikkaus.webp"
                alt="Geelilakkaus_Luxusmanikyyri_kynsien_leikkaus_Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kynnet/images/Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_Geelilakkaus_Manikyyri_kynsien_lakkaus_parafiininaamio.webp"
                alt="Geelilakkaus_Manikyyri_kynsien_lakkaus_parafiininaamio_Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kynnet/images/Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga_Geelilakkaus_Manikyyri.webp"
                alt="Geelilakkaus_Manikyyri_Kauneushoitola_MG_Studio_Malminkartano_Helsinki_Myyrmaki_Haaga"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/kynnet/images/kynsien-lakkaus-mgstudio-myyrmäki-malminkartano.jpeg"
                alt="kynsien-geelilakkaus-Manikyyri-Kauneushoitola-MG-Studio-Malminkartano-Helsinki"
              />{' '}
              ,
            </Carousel>
          </div>
        </ContentWrapper>

        {/*5. Geelilakkaus varpaaisiin */}
        <ContentWrapper>
          <div className="content">
            <Heading
              as="h3"
              className="heading"
              content="Geelilakkaus Varpaisiin"
            />
            <Heading
              as="h4"
              className="text"
              content="Kauniit ja kestävät kynnet. Varpaankynsien geelilakkaus"
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
          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../components/palvelut/geelilakkausVarpaisiin/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_kauniit_jalat_meiltä.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_kauniit_jalat_meiltä"
              />
              , ,
              <StaticImage
                src="../../../components/palvelut/geelilakkausVarpaisiin/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_naisille.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_naisille"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/geelilakkausVarpaisiin/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_punaiset_geelikynnet.jpeg"
                alt="Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_punaiset_geelikynnet"
              />
              ,
              <StaticImage
                src="../../../components/palvelut/geelilakkausVarpaisiin/images/Jalkahoito_MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki.jpeg"
                alt="Jalkahoito-ja-geelilakkaus-MG_Studio_Malminkartano_Helsinki_Haaga_Myyrmäki_Kannelmäki_siniset_geelikynnet"
              />
            </Carousel>
          </div>
        </ContentWrapper>

        {/*6. Olaplex */}
        <ContentWrapper style={{ marginTop: '-5rem' }}>
          <div className="content">
            <Heading
              as="h3"
              className="heading"
              content="Olaplex salonkihoito"
            />
            <Heading
              as="h4"
              className="text"
              content="Mikäli hiuksesi ovat huonossa kunnossa, kuivat tai karheat on niihin uskomaton apu Olaplex-salonkihoidosta."
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

          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../images/palvelut/olaplex.jpeg"
                alt="Olaplex hiusten leikkaus vantaa martinlaakso"
              />
            </Carousel>
          </div>
        </ContentWrapper>

        {/* 7. Hieronta */}
        <ContentWrapper>
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
          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../images/palvelut/hemmotteleva_kuumakivi_hieronta_w.webp"
                alt="Hieronta vartalo vantaa martinlaakso"
              />
            </Carousel>
          </div>
        </ContentWrapper>

        {/*8. Hemmotteleva kuumakivihieronta */}
        <ContentWrapper style={{ marginTop: '-5rem' }}>
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
          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../images/palvelut/hieronta_w.webp"
                alt="Hemmotteleva kuumakivihieronta vantaa martinlaakso"
              />
            </Carousel>
          </div>
        </ContentWrapper>

        {/* 9. Kasvohoito  */}
        <ContentWrapper>
          <div className="content">
            <Heading
              as="h3"
              className="heading"
              content="Kasvohoito (tulossa)"
            />
            {/* <Heading as="h4" className="text" content="" />
            <Link
              to="/palvelumme/kasvohoito/"
              className="explore"
              tabindex="0"
              aria-label="Ajanvaraus kasvohoitoon"
              activeClassName="active"
            >
              Lue lisää ja varaa aikaa <Icon icon={chevronRight} />
            </Link> */}
          </div>
          <div className="carousel">
            <Carousel>
              <StaticImage
                src="../../../images/palvelut/kasvohoito.webp"
                alt="Hemmotteleva kuumakivihieronta vantaa martinlaakso"
              />
            </Carousel>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
