import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;
  position: relative;
  background: rgb(37, 100, 149);
  background: linear-gradient(
    135deg,
    rgba(37, 100, 149, 0.9304096638655462) 1%,
    rgba(236, 247, 254, 0.08727240896358546) 100%
  );
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 1099px) {
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
      margin-top: 35px;
      align-items: flex-start;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
  .bannerBottomShape {
    position: absolute;
    right: 0;
    bottom: -2px;
    @media only screen and (max-width: 999px) {
      display: none;
    }
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  img {
    margin-left: 1.2vw;
    margin-top: 1.4vh;

    @media only screen and (min-width: 1440px) {
      margin-bottom: '12em';
      margin-left: '2vw';
    }
  }
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export const BannerContent = styled.div`
  width: 40%;
  flex-shrink: 0;
  @media only screen and (max-width: 1199px) {
    flex-shrink: 0;
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    font-size: 44px;
    font-weight: 400;
    font-family: 'Raleway';
    line-height: 55px;
    color: ${themeGet('colors.menu', '#e7eef4')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  p {
    font-family: 'Raleway';
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 29px;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      background-color: ${themeGet('colors.white', '#fff')};
      color: rgb(15, 33, 55);
      font-size: 16px;
      letter-spacing: -0.1px;
      &:hover {
        box-shadow: #1e2a4a 0px 12px 24px -10px;
      }
    }

    &.text {
      font-size: 16px;
      color: ${themeGet('colors.white', '#fff')};
      letter-spacing: -0.1px;
      font-weight: 500;
      .btn-icon {
        i {
          color: #fff;
        }
        svg {
          width: auto;
          height: 25px;
        }
      }
    }
  }
`;

export default BannerWrapper;
