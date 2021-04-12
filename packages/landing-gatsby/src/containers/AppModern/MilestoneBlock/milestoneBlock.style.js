import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import bgImage from '../../../images/etusivu/kauniit_kynnet.webp';

const BlockWrapper = styled.div`
  width: 100%;
  margin: 81px 0;
  padding: 60px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  @media only screen and (max-width: 1440px) {
    margin: 70px 0;
    padding: 50px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 30px;
    margin: 50px 0;
  }
  @media only screen and (max-width: 991px) {
    margin: 40px 0;
    padding-bottom: 10px;
  }
  @media only screen and (max-width: 480px) {
    padding: 3em;
    background-size: cover;
    margin-bottom: 40px;
  }
`;

export const MilestoneCard = styled.div`
  max-width: 323px;
  padding: 1em;
  border-radius: 10px;
  background-color: #935216;
  text-align: center;
  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1360px) {
    max-width: 300px;
  }
  @media only screen and (max-width: 991px) {
    max-width: 280px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4em;
    font-weight: 300;
    color: #fff;
    margin: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 1.2rem;
      line-height: 1.4em;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 1rem;
      line-height: 1.4em;
    }
  }

  h2 {
    font-size: 2.2rem;
    line-height: 1.2em;
    font-weight: 600;
    color: #fcdede;
    @media only screen and (max-width: 1440px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 1.8rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 1.6rem;
    }
  }

  .learn__more-btn {
    margin-top: 40px;
    @media only screen and (max-width: 1440px) {
      margin-top: 45px;
    }
    @media only screen and (max-width: 1360px) {
      margin-top: 40px;
    }

    &::before {
      background-color: #fffa9a !important;
    }
  }
`;

export default BlockWrapper;
