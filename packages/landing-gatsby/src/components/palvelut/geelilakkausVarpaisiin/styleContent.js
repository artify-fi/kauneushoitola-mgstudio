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
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
`;

export const Content1 = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  justify-content: center;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
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

    @media only screen and (min-width: 421px) {
      line-height: 1.6rem;
      font-size: 1.2rem;
      padding-left: 4em;
      padding-right: 4em;
    }

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.3rem;
      padding-left: 4em;
      padding-right: 4em;
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
  grid-column: 2 / 3;
  width: 100%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
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

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.3rem;
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
