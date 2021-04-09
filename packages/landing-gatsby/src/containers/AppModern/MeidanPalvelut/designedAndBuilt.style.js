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
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .image {
    width: 40vw;
    @media only screen and (max-width: 991px) {
      width: 45vw;
    }
    @media only screen and (max-width: 667px) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
  .content {
    width: 393px;
    padding: 2em;
    @media only screen and (max-width: 991px) {
      width: 290px;
    }
    @media only screen and (max-width: 667px) {
      width: 100%;
    }
    .heading {
      color: ${themeGet('colors.headingColor', '#0F2137')};
      font-size: 2.2rem;
      line-height: 2.4px;
      font-weight: 700;
      letter-spacing: -1px;
      padding-right: 42px;
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
    }
    .text {
      font-size: 16px;
      line-height: 28px;
      color: #6e7379;
      margin-bottom: 36px;
      @media only screen and (max-width: 1440px) {
        font-size: 1.4rem;
      }
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 1.2rem;
      }
      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
        text-align: center;
      }
      @media only screen and (max-width: 420px) {
        font-size: 1.2rem;
        text-align: center;
        margin-top: -1.6rem;
      }
    }
  }
  .reusecore__button {
    border-radius: 5px;
    &:hover {
      background-color: #9f4976;
    }
  }
`;

export default SectionWrapper;
