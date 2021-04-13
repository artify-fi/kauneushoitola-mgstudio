import styled from 'styled-components';

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  @media only screen and (max-width: 1366px) {
    padding: 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    padding: 1em;
    margin-right: 4em;
    @media only screen and (max-width: 1366px) {
      width: 30vw;
      margin-right: 0.2em;
    }
    @media only screen and (max-width: 991px) {
    }
    @media only screen and (max-width: 768px) {
      width: 40vw;
    }
    @media only screen and (max-width: 420px) {
      width: 96vw;
    }
  }
  .content {
    /* display: flex;
    justify-content: center; */
    width: 480px;
    padding: 1em;
    @media only screen and (max-width: 1366px) {
      width: 40vw;
    }
    @media only screen and (max-width: 991px) {
      width: 36vw;
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 480px) {
      width: 98vw;
    }
  }
  .heading {
    display: flex;
    justify-content: center;
    font-family: Playfair Display;
    color: #ff3f66;
    font-size: 2.2rem;
    line-height: 1.2em;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 2em;

    @media only screen and (max-width: 1366px) {
      font-size: 1.7rem;
      line-height: 42px;
      margin-bottom: 1.6em;
    }
    @media only screen and (max-width: 991px) {
      display: flex;
      justify-content: center;
      font-size: 1.6rem;
      margin-bottom: 6px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.6rem;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.6rem;
      text-align: center;
      margin-bottom: 2em;
    }
  }
  .text {
    color: #0a1730;
    font-family: Playfair Display;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 26px;
    color: #19243a;
    letter-spacing: 0.2px;
    text-transform: none;
    @media only screen and (max-width: 1440px) {
      font-size: 1.3rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 1.2rem;
      padding-right: 0px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.1rem;
      width: 270px;
      padding-right: 0px;
    }
    @media only screen and (max-width: 480px) {
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: 1.2rem;
      line-height: 1.8rem;
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
    background-color: #ff3f66;
  }

  .explore {
    color: #ff3f66;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 32px;
    display: inline-flex;
    align-items: center;
    padding-left: 2em;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      font-size: 1.1rem;
      width: 100%;
      padding-left: 0px;
      margin-top: -2em;
    }
  }

  .reusecore__button {
    border-radius: 5px;
    &:hover {
      background-color: #f4899e;
    }
  }
`;

export default SectionWrapper;
