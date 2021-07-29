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
  @media only screen and (min-width: 991px) {
    margin-bottom: 3em;
  }

  .carousel {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    width: 480px;
    height: 480px;
    padding: 2rem;
    border-radius: 2rem;
    padding-left: -2px;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 28vw;
    padding: 1em;
    margin-right: 4em;
    @media only screen and (max-width: 1560px) {
      width: 32vw;
      margin-right: 4em;
    }
    @media only screen and (max-width: 1360px) {
      width: 36vw;
      margin-right: 2em;
    }
    @media only screen and (max-width: 991px) {
      width: 64vw;
    }
    @media only screen and (max-width: 768px) {
      width: 92vw;
    }
    @media only screen and (max-width: 420px) {
      width: 96vw;
    }
  }
  .content {
    width: 32vw;
    padding: 1em;
    margin-left: 3em;
    @media only screen and (max-width: 1360px) {
      width: 36vw;
    }
    @media only screen and (max-width: 991px) {
      width: 64vw;
    }
    @media only screen and (max-width: 768px) {
      width: 92vw;
      margin: auto;
    }
    @media only screen and (max-width: 480px) {
      width: 98vw;
      margin: auto;
    }
  }
  .heading {
    display: flex;
    justify-content: center;
    font-family: Playfair Display;
    color: #000;
    font-size: 2.2rem;
    line-height: 1.2em;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 2em;

    @media only screen and (max-width: 1360px) {
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
    line-height: 1.6em;
    color: #19243a;
    letter-spacing: 0.2px;
    text-transform: none;
    margin-left: 1em;
    @media only screen and (max-width: 1360px) {
      font-size: 1.4rem;
      margin-left: 3.2em;
      margin-bottom: 1.6em;
    }
    @media only screen and (max-width: 991px) {
      display: flex;
      justify-content: center;
      margin-left: 0px;
      font-size: 1.4rem;
      margin-bottom: 6px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
      text-align: center;
    }
    @media only screen and (max-width: 440px) {
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: 1.3rem;
      line-height: 1.7rem;
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
    font-size: 1.4rem;
    line-height: 1.6;
    display: inline-flex;
    align-items: center;
    margin-left: 2em;
    @media only screen and (max-width: 1360px) {
      margin-left: 2em;
      font-size: 1.4rem;
    }
    @media only screen and (max-width: 991px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 768px) {
      justify-content: center;
      font-size: 1.3rem;
      width: 100%;
      padding-left: 0px;
      margin: auto;
      margin-top: -2em;
    }
    @media only screen and (max-width: 440px) {
      font-size: 1.2rem;
      margin: auto;
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
