import styled from 'styled-components';
import img from '../images/jalkahoito-kauneushoitola-mgstudio-helsinki-malminkartano.webp';

const BannerWrapper = styled.div`
  padding-top: 100px;
  overflow: hidden;
  position: relative;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: sticky; */
  top: 0;
  z-index: 1;
  height: 30vh;
  // added shadow on the Hero
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);

  @media only screen and (min-width: 440px) and (max-width: 998px) {
    height: 40vh;
  }

  @media only screen and (min-width: 999px) and (max-width: 1366px) {
    height: 42vh;
  }

  @media only screen and (min-width: 1367px) {
    height: 46vh;
  }

  > div.container {
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

export default BannerWrapper;
