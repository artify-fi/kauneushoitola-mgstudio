import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.div`
  padding: 75px 0;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
  .mainheading {
    display: flex;
    justify-content: center;
    font-family: Playfair Display;
    color: #bd5f91;
    font-size: 3.2rem;
    line-height: 3.4em;
    font-weight: 700;
    letter-spacing: -1px;
    align-self: center;
    margin-bottom: 1em;
    @media only screen and (max-width: 1366px) {
      font-size: 2.8rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 2.6rem;
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 2.4rem;
      text-align: center;
    }
    @media only screen and (max-width: 420px) {
      font-size: 2rem;
      text-align: center;
      margin-top: 0.6em;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .image {
    width: 40vw;
    @media only screen and (max-width: 991px) {
      width: 45vw;
    }
    @media only screen and (max-width: 667px) {
      width: 100%;
    }
  }
  .content {
    width: 40vw;
    padding: 2em 0;
    @media only screen and (max-width: 991px) {
      width: 40vw;
    }
    @media only screen and (max-width: 667px) {
      width: 100%;
    }
  }
  .heading {
    font-family: Playfair Display;
    color: #bd5f91;
    font-size: 2.2rem;
    line-height: 2.4px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 27px;
    @media only screen and (max-width: 1366px) {
      font-size: 1.8rem;
      line-height: 42px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 1.6rem;
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.6rem;
      text-align: center;
    }
    @media only screen and (max-width: 420px) {
      font-size: 1.6rem;
      text-align: center;
      margin-bottom: 2em;
    }
  }
  .text {
    color: #0a1730;
    font-family: DM Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #19243a;
    letter-spacing: 0.2px;
    margin-bottom: 36px;
    text-transform: none;
    @media only screen and (max-width: 1440px) {
      font-size: 1.4rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
      text-align: center;
    }
    @media only screen and (max-width: 420px) {
      font-size: 1.1rem;
      text-align: center;
      margin-top: -1.6rem;
    }
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button {
    display: flex;
    align-items: center;
    justify-items: center;
  }

  .reusecore__button {
    border-radius: 5px;
    &:hover {
      background-color: #9f4976;
    }
  }
`;

export default SectionWrapper;
