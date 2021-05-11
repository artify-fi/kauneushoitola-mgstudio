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
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1em;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
`;

export const Content1 = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 1 / 2;
  width: 40vw;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    /* grid-column: 1 / 2; */
    width: 42vw;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
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
      width: 40vw;
    }

    @media only screen and (min-width: 1367px) {
      width: 38vw;
    }
  }

  h1 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #ff3f66;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.8;
    letter-spacing: 2px;
    margin-top: 1.2em;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.7rem;
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.7em;
      font-size: 1.4rem;
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
      font-size: 1.4rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.7em;
      font-size: 1.4rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.9rem;
      font-size: 1.6rem;
    }
  }

  h3 {
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
      font-size: 1.3rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.6em;
      font-size: 1.4rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.9rem;
      font-size: 1.6rem;
    }
  }

  p {
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.6rem;
    padding: 0.2em;

    @media only screen and (min-width: 421px) and (max-width: 768px) {
      line-height: 1.4rem;
      font-size: 1.2rem;
      padding-left: 1em;
      padding-right: 1em;
    }

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.5rem;
      font-size: 1.2rem;
      padding-left: 1.3em;
      padding-right: 1.3em;
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
`;

export const Content2 = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 2 / 3;
  width: 40vw;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    /* grid-column: 1 / 2; */
    width: 42vw;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
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
      width: 40vw;
    }

    @media only screen and (min-width: 1367px) {
      width: 38vw;
    }
  }

  h1 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #ff3f66;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.8;
    letter-spacing: 2px;
    margin-top: 1.2em;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.7rem;
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.7em;
      font-size: 1.4rem;
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
      font-size: 1.4rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.7em;
      font-size: 1.4rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.9rem;
      font-size: 1.6rem;
    }
  }

  h3 {
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
      font-size: 1.3rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.6em;
      font-size: 1.4rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.9rem;
      font-size: 1.6rem;
    }
  }

  p {
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.6rem;
    padding: 0.2em;

    @media only screen and (min-width: 421px) and (max-width: 768px) {
      line-height: 1.4rem;
      font-size: 1.2rem;
      padding-left: 1em;
      padding-right: 1em;
    }

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.5rem;
      font-size: 1.2rem;
      padding-left: 1.3em;
      padding-right: 1.3em;
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
`;

export default SectionWrapper;
