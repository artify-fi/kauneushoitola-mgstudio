import styled from 'styled-components';
import img from '../../../images/kauneus_hieronta_kampaaja.webp';

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    max-height: 98vh;
  }
  @media only screen and (min-width: 1099px) and (max-width: 1200px) {
    max-height: 98vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
    max-height: 98vh;
  }

  > div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(802px - 100px);
    height: 94vh;
    @media only screen and (min-width: 1200px) and (max-width: 1440px) {
      max-height: calc(100vh - 40px);
      margin-top: 35px;
    }
    @media only screen and (max-width: 1199px) {
      max-height: 98vh;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      max-height: 98vh;
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

export const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  @media only screen and (max-width: 1199px) {
    flex-shrink: 0;
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    font-family: 'Playfair Display';
    font-size: 2.4rem;
    letter-spacing: 2px;
    font-weight: 400;
    color: rgba(20, 28, 45, 0.95);
    margin-top: -104vh;
    padding-bottom: 0.3em;
    text-align: center;
    border: 2px 0 2px 0;
    border-color: rgba(20, 28, 45, 0.95);
    border-top: 2px solid rgba(20, 28, 45, 0.95);
    border-bottom: 2px solid rgba(20, 28, 45, 0.95);

    @media only screen and (min-width: 440px) and (max-width: 680px) {
      font-size: 2.6rem;
    }

    @media only screen and (min-width: 681px) and (max-width: 998px) {
      font-size: 3rem;
    }

    @media only screen and (min-width: 999px) and (max-width: 1366px) {
      font-size: 3.8rem;
    }

    @media only screen and (min-width: 1366px) {
      font-size: 4.2rem;
    }
  }
`;

export default BannerWrapper;
