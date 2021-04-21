import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 30px 0 30px;
  @media only screen and (max-width: 1440px) {
    padding: 0px 0 20px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 50px 0 30px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0 15px;
  }
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Section = styled.section`
  display: grid;
  /* justify-content: center;
  align-content: center; */
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
`;

export const Content1 = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-column: 1 / 2;
  width: 38vw;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 44vw;
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
    width: 80vw;
  }

  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    width: 82vw;
    padding: 0.6em;
    padding-bottom: 2em;

    @media only screen and (min-width: 421px) {
      width: 74vw;
      padding-left: 2em;
      padding-right: 2em;
    }

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      width: 44vw;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      width: 42vw;
    }

    @media only screen and (min-width: 1367px) {
    }
  }

  h1 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: Playfair Display, Times New Roman, serif;
    color: #ff3f66;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.52;
    letter-spacing: 2px;

    @media only screen and (min-width: 421px) {
      line-height: 2.6rem;
      font-size: 1.6rem;
      padding-left: 4.4em;
      padding-right: 4.4em;
      margin-bottom: 2em;
    }

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.6rem;
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.7em;
      font-size: 1.6rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.9rem;
      font-size: 1.8rem;
    }
  }

  h2 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #ff3f66;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.52;
    letter-spacing: 2px;
    margin-top: 1.2em;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.6em;
      font-size: 1.3rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.8rem;
      font-size: 1.4rem;
    }
  }

  p {
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.6rem;
    padding: 0.2em;

    @media only screen and (min-width: 421px) and (max-width: 767px) {
      line-height: 1.4rem;
      font-size: 1.2rem;
      padding-left: 1em;
      padding-right: 1em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      line-height: 1.5rem;
      font-size: 1.2rem;
      padding-left: 3em;
      padding-right: 3em;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.6em;
      font-size: 1.3rem;
      padding-left: 1em;
      padding-right: 1em;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.8rem;
      font-size: 1.4rem;
    }
  }

  .link {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    text-align: center;
    font-family: DM Sans;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ff3f66;
    line-height: 1.7;
    font-family: Playfair Display;
    text-decoration: underline;
    word-spacing: 0.1em;
  }

  .align {
    display: flex;
    align-items: center;
  }

  .explore {
    color: #ff3f66;
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

  p::first-letter {
    font-size: 170%;
    color: #ff3f66;
    font-weight: 700;
  }
`;

export const Content2 = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;
  grid-column: 2/ 3;
  width: 38vw;
  padding-bottom: 0px;
  padding-top: 0px;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 44vw;
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
    width: 80vw;
  }

  .heading {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 0.6em;

    @media only screen and (min-width: 421px) {
      width: 74vw;
      padding-left: 2em;
      padding-right: 2em;
      padding-top: 3em;
    }

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    }

    @media only screen and (min-width: 1367px) {
    }
  }

  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 82vw;
    padding: 0.6em;
    padding-bottom: 2em;

    @media only screen and (min-width: 421px) {
      width: 74vw;
      padding-left: 2em;
      padding-right: 2em;
    }

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      width: 44vw;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    }

    @media only screen and (min-width: 1367px) {
    }
  }

  h1 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #ff3f66;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.52;
    letter-spacing: 2px;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.6rem;
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.7em;
      font-size: 1.6rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.9rem;
      font-size: 1.8rem;
    }
  }

  h2 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #ff3f66;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.52;
    letter-spacing: 2px;
    margin-top: 1.2em;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.6em;
      font-size: 1.3rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.8rem;
      font-size: 1.4rem;
    }
  }

  p {
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.6rem;
    padding: 0.2em;

    @media only screen and (min-width: 421px) and (max-width: 767px) {
      line-height: 1.4rem;
      font-size: 1.2rem;
      padding-left: 1em;
      padding-right: 1em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      line-height: 1.5rem;
      font-size: 1.2rem;
      padding-left: 3em;
      padding-right: 3em;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.6em;
      font-size: 1.3rem;
      padding-left: 1em;
      padding-right: 1em;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.8rem;
      font-size: 1.4rem;
    }
  }

  .subhead {
    initial-letter: 2;
  }

  .link {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    text-align: center;
    font-family: DM Sans;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ff3f66;
    line-height: 1.7;
    font-family: Playfair Display;
    text-decoration: underline;
    word-spacing: 0.1em;
  }

  .align {
    display: flex;
    align-items: center;
  }

  .explore {
    color: #ff3f66;
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

  p::first-letter {
    font-size: 170%;
    color: #ff3f66;
    font-weight: 700;
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
