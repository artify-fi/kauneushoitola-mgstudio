import React from 'react';
import { Link } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
// import Image1 from '../../../images/palvelut/naisten_hiusten_leikkaus.jpg';
// import Image2 from '../../../images/palvelut/miesten_hiusten_leikkaus.jpg';
import Image3 from '../../../images/palvelut/palvelut_kampaaja_oppilastyo.webp';
// import Image4 from '../../../images/palvelut/permanentti.jpg';
// import Image5 from '../../../images/palvelut/airtouch.jpg';
import Image6 from '../../../images/palvelut/olaplex.jpeg';
import Image7 from '../../../images/palvelut/hemmotteleva_kuumakivi_hieronta_w.webp';
import Image8 from '../../../images/palvelut/hieronta_w.webp';
import Image9 from '../../../images/palvelut/kasvohoito.jpg';
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
              alt="naisten hiusten leikkaus vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading
              as="h2"
              className="heading"
              content="Kampaaja(oppilastyö)"
            />
            <Heading as="h4" className="text" content=" Hiusten värjäys" />
            <Heading
              style={{ paddingTop: '0.3rem' }}
              as="h4"
              className="text"
              content="Hiusten leikkaus"
            />

            <Link
              className="explore"
              href="/palvelumme/kampaaja-helsinki-malminkartano/"
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
              as="h2"
              className="heading"
              content="Olaplex salonkihoito"
            />
            <Heading
              as="h4"
              className="text"
              content="Mikäli hiuksesi ovat huonossa kunnossa, kuivat tai karheat on niihin uskomaton apu Olaplex-salonkihoidosta.
              Olaplex-salonkihoito voidaan tehdä muun kampaamopalvelun yhteydessä tai voit varata siihen erikseen ajan."
            />
            <Link className="explore" href="/palvelumme/olaplex-salonkihoito/">
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
            <Heading as="h2" className="heading" content="Ripset & Kulmat" />
            <Heading
              as="h4"
              className="text"
              content="Ripsienpidennys klassiset/ hybrid/ volyymit. Ripsien ja kulmien värjäys sekä muotoilu"
            />
            <Link className="explore" href="/palvelumme/ripset-kulmat/">
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
              as="h2"
              className="heading"
              content="Kasvohoito (tulossa)"
            />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link className="explore" href="/palvelumme/kasvohoito/">
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
            <Heading as="h2" className="heading" content="Jalkahoito" />
            <Heading
              as="h4"
              className="text"
              content="Perusjalkohoito, Luxus jalkahoito, Jalkahoito geelilakalla"
            />
            <Link className="explore" href="/palvelumme/jalkahoito/">
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
              as="h2"
              className="heading"
              content="Geelilakkaus Varpaisiin"
            />
            <Heading
              as="h4"
              className="text"
              content="Kauniit ja kestävät kynnet kuukausiksi kauneushoitola martinlaakso."
            />
            <Link
              className="explore"
              href="/palvelumme/geelilakkaus-varpaisiin/"
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
            <Heading as="h2" className="heading" content="Hieronta" />
            <Heading
              as="h4"
              className="text"
              content="Hieronnasta apua kehon kiputiloihin."
            />
            <Link className="explore" href="/palvelumme/hieronta/">
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
            <Heading as="h2" className="heading" content="Kuumakivihieronta" />
            <Heading
              as="h4"
              className="text"
              content="Kuumakivihieronta on yksi luonnollisimmista paranemisen muodoista, joka käyttää ainutlaatuista menetelmää maapallon lämpöenergian ohjaamiseksi ihmiskehoon."
            />
            <Link
              className="explore"
              href="/palvelumme/hemmotteleva-kuumakivihieronta/"
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

{
  /* 2. Miesten hiusten leikkaus */
}
{
  /* <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image2}
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
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link className="link" href="/palvelumme/naisten-hiusten-leikkaus/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper> 

      3. Varipaketti 
       <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image3}
              alt="naisten hiusten väripaketti vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading as="h2" className="heading" content="Väripaketti" />
            <Heading
              as="h4"
              className="text"
              content="Kids, you tried your best and you failed miserably. The lesson is, never try. Remember the time he ate my goldfish? And you lied and said I never had goldfish. Then why did I have the bowl."
            />
            <Link className="link" href="//palvelumme/permanentti//">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>
      4. Permanentti 
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image4}
              alt="Permanentti vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading as="h2" className="heading" content="Permanentti" />
            <Heading
              as="h4"
              className="text"
              content="Shoplifting is a victimless crime. Like punching someone in the dark. You dont win friends with salad. Son, when you participate in sporting events, its not whether you win or lose."
            />
            <Link className="link" href="//palvelumme/permanentti/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper> 
 5. Airtouch 
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image5}
              alt="Airtouch hiusten leikkaus vantaa martinlaakso vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading as="h2" className="heading" content="Airtouch" />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!". You may remember me from such self-help tapes as '
            />
            <Link
              className="link"
              href="/palvelumme/hemmotteleva-kuumakivihieronta/"
            >
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper> 
     
       
     */
}
