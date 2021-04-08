import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 30px 0 130px;
  @media only screen and (max-width: 1440px) {
    padding: 0px 0 100px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 50px 0 100px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0 65px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0px 0 70px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    flex-direction: column;
    margin-top: 4em;
  }
`;

export const Content1 = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 3em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 2em;
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
  }

  h2 {
    font-family: Playfair Display, Times New Roman, serif;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.52;
    letter-spacing: 2px;
    color: #000;
    @media only screen and (max-width: 1440px) {
      font-size: 1.4px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
      margin-top: 15px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.5em;
    letter-spacing: -1px;
    @media only screen and (max-width: 1440px) {
      font-size: 1.4rempx;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1rem;
    }
    @media only screen and (max-width: 768px) {
      line-height: 1.1rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }
  a {
    color: #11287c;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-weight: 500;
    &:before {
      background-color: #11287c;
      content: '';
      height: 2px;
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.3s ease-in-out;
      width: 100%;
    }
    &:hover {
      &:before {
        width: 0;
      }
    }
  }
  .explore {
    color: #2d3a56;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 42px;
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      margin-left: -50px;
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

export const Content2 = styled.div`
  grid-column: 2 / 3;
  width: 100%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 3em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 2em;
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
  }

  h2 {
    font-family: Playfair Display, Times New Roman, serif;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.52;
    letter-spacing: 2px;
    color: #000;
    @media only screen and (max-width: 1440px) {
      font-size: 1.4px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
      margin-top: 15px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.5em;
    letter-spacing: -1px;
    @media only screen and (max-width: 1440px) {
      font-size: 1.4rempx;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1rem;
    }
    @media only screen and (max-width: 768px) {
      line-height: 1.1rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }
  a {
    color: #11287c;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-weight: 500;
    &:before {
      background-color: #11287c;
      content: '';
      height: 2px;
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.3s ease-in-out;
      width: 100%;
    }
    &:hover {
      &:before {
        width: 0;
      }
    }
  }
  .explore {
    color: #2d3a56;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 42px;
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      margin-left: -50px;
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

export const Illustration = styled.figure`
  width: 55%;
  margin: 0 0 0 5%;
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
    margin: 0;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export default SectionWrapper;