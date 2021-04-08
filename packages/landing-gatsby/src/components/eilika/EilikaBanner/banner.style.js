import styled from 'styled-components';

const BannerWrapper = styled.section`
  position: relative;
  background-color: #051d4c;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 70vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default BannerWrapper;