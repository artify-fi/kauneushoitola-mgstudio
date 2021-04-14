import styled from 'styled-components';
import img from '../../../../images/palvelut/palvelut_erikseen/olaplex_salonkihoito.webp';

const BannerWrapper = styled.div`
  padding-top: 100px;
  overflow: hidden;
  position: relative;
  display: flex;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 46vh;
  /* position: sticky; */
  top: 0;
  z-index: 1;
  // added shadow on the Hero
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
  }
  @media only screen and (min-width: 1099px) and (max-width: 1200px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 480px) {
    max-height: 22vh;
  }

  // From here it must be possible to change the height
  > div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    }
    @media only screen and (max-width: 1099px) {
    }
    @media only screen and (max-width: 768px) {
      padding: 20px 0 15px;
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
    font-size: 1.8rem;
    font-weight: 400;
    // Text color
    color: #f7f4f4;
    padding: 0.5rem;
    margin-bottom: 10rem;
    border: 2px 0 2px 0;
    border-color: rgba(20, 28, 45, 0.95);
    border-top: 2px solid rgba(20, 28, 45, 0.95);
    border-bottom: 2px solid rgba(20, 28, 45, 0.95);

    @media only screen and (min-width: 440px) and (max-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 6rem;
    }

    @media only screen and (min-width: 769px) and (max-width: 998px) {
      font-size: 2.2rem;
      margin-bottom: 6rem;
    }

    @media only screen and (min-width: 999px) and (max-width: 1366px) {
      font-size: 3.6rem;
      margin-bottom: 6rem;
    }

    @media only screen and (min-width: 1367px) {
      font-size: 4.8rem;
      margin-bottom: 6rem;
    }
  }
`;

export default BannerWrapper;
