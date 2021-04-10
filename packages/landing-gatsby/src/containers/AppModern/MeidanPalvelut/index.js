import React from 'react';
import { Link } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import Image1 from '../../../images/palvelut/naisten_hiusten_leikkaus.jpg';
import Image2 from '../../../images/palvelut/miesten_hiusten_leikkaus.jpg';
import Image3 from '../../../images/palvelut/varipaketti.jpg';
import Image4 from '../../../images/palvelut/permanentti.jpg';
import Image5 from '../../../images/palvelut/airtouch.jpg';
import Image6 from '../../../images/palvelut/olaplex.jpeg';
import Image7 from '../../../images/palvelut/hemmotteleva_kuumakivihieronta.jpg';
import Image8 from '../../../images/palvelut/hieronta.jpg';
import Image9 from '../../../images/palvelut/kasvohoito.jpg';
import Image10 from '../../../images/palvelut/kynnet.jpg';
import Image11 from '../../../images/palvelut/jalkahoito.jpg';
import Image12 from '../../../images/palvelut/ripsiet_kulmat_ripsienpidennykset.jpg';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper>
      <div className="mainheading">
        <Heading as="h1" className="mainheading" content="Palvelumme" />
      </div>
      <Container>
        {/* Heading of the section */}
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image1}
              alt="naisten hiusten leikkaus vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading
              as="h2"
              className="heading"
              content="Naisten hiusten leikkaus"
            />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left.'
            />
            <Link className="link" href="/palvelumme/naisten-hiusten-leikkaus/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>
        {/* 2. Miesten hiusten leikkaus */}
        <ContentWrapper>
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

        {/* 3. Varipaketti */}
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
        {/* 4. Permanentti */}
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

        {/* 5. Airtouch */}
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

        {/* 6. Olaplex */}
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image6}
              alt="Olaplex hiusten leikkaus vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading as="h2" className="heading" content="Olaplex" />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link
              className="link"
              href="/palvelumme/hemmotteleva-kuumakivihieronta/"
            >
              <Button className="button" title="Lue lisää tai varaa aikaa" />
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
            <Heading
              as="h2"
              className="heading"
              content="Hemmotteleva kuumakivihieronta"
            />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link
              className="link"
              href="/palvelumme/hemmotteleva-kuumakivihieronta/"
            >
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>

        {/* 8. Hieronta */}
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image8}
              alt="Hieronta vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading as="h2" className="heading" content="Hieronta" />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link className="link" href="/palvelumme/hieronta/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>

        {/* 9. Kasvohoito */}
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
              content="Kasvohoito (tulossa pian)"
            />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link className="link" href="/palvelumme/kasvohoito/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>

        {/* 10 Kynnet */}
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image10}
              alt="Kynnet vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading as="h2" className="heading" content="Kynnet" />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link className="link" href="/palvelumme/kynnet/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>

        {/* 11 Jalkahoito */}
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
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me.'
            />
            <Link className="link" href="/palvelumme/jalkahoito/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>

        {/* Ripset Kulmat Ripsienpidennykset */}
        <ContentWrapper>
          <div className="image">
            <Image
              className="image"
              src={Image12}
              alt="Ripset Kulmat Ripsienpidennykset vantaa martinlaakso"
            />
          </div>
          <div className="content">
            <Heading
              as="h2"
              className="heading"
              content="Ripset, Kulmat & Ripsienpidennykset"
            />
            <Heading
              as="h4"
              className="text"
              content='Hi. I am Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!" A lifetime of working with nuclear power has left me with.'
            />
            <Link className="link" href="/palvelumme/ripset-kulmat/">
              <Button className="button" title="Lue lisää tai varaa aikaa" />
            </Link>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;