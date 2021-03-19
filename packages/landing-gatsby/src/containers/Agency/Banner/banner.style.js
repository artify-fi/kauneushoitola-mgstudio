import styled from 'styled-components';
//import { themeGet } from '@styled-system/theme-get';

const BannerSection = styled.section`
  background: rgb(37, 100, 149);
  background: linear-gradient(
    135deg,
    rgba(37, 100, 149, 0.9304096638655462) 1%,
    rgba(236, 247, 254, 0.08727240896358546) 100%
  );
  @media only screen and (min-width: 480px) {
    padding-top: 6em;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px 0;

  @media only screen and (max-width: 1440px) {
    padding: 40px 0;
  }
  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    margin-top: 3em;
  }
  @media only screen and (max-width: 480px) {
    padding: 20px 0 50px;
  }
`;

export const BannerContent = styled.div`
  margin-right: 5%;
  width: 40vw;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    margin-right: 0;
    width: 100%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin-right: 50px;
    width: 50%;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    margin: 0 auto;
    width: 80vw;
  }
  @media only screen and (max-width: 768px) {
    margin-right: 0;
    width: 96vw;
  }
  h1 {
    font-size: 42px;
    font-weight: 400;
    line-height: 55px;
    text-transform: none;
    color: #e7eef4;
    font-family: 'Raleway';

    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
      font-size: 32px;
      line-height: 45px;
    }

    @media only screen and (max-width: 1023px) {
      font-size: 28px;
      line-height: 40px;
      text-align: center;
    }

    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 40px;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #31344f;
    font-family: Raleway;
    line-height: 28px;
    margin-top: 20px;
    text-transform: none;
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
      line-height: 32px;
    }
    @media only screen and (max-width: 1023px) {
      font-size: 1.2em;
      line-height: 40px;
      text-align: center;
    }

    @media only screen and (max-width: 768px) {
      line-height: 36px;
      margin-top: 10px;
      text-align: center;
      margin-bottom: 25px;
    }
  }
`;

export const DomainChecker = styled.div`
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    width: 90%;
  }
  button {
    margin-top: 20px;
    min-height: 60px;
    width: 1005;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      min-height: 45px;
    }

    @media only screen and (max-width: 1023px) {
      max-width: 560px;
      margin-top: 1em;
      padding: 3px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const DomainControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerImage = styled.figure`
  margin-top: 6em;
  width: 40vw;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: none;
  }
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    display: block;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default BannerSection;
