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
    padding: 0px 0 10px;
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
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 1;
    padding: 3em;
  }
  @media only screen and (max-width: 420px) {
    grid-column: 1 / 1;
    padding: 0.6em;
    margin-bottom: 2em;
  }

  h2 {
    font-family: Playfair Display, Times New Roman, serif;
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
    line-height: 1.52;
    letter-spacing: 2px;
    color: #000;
    text-align: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin-top: 15px;
    }
    @media only screen and (min-width: 1440px) {
    }
    @media only screen and (max-width: 420px) {
      margin-top: -3em;
    }
  }

  h3 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #ff3f66;
    text-align: center;
    border-color: rgba(159, 73, 118, 0.5);
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5em;
    letter-spacing: 1px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.3rem;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 1.7rem;
      text-align: center;
      padding-top: 0px;
    }
  }

  p {
    text-align: center;
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    border-color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.2rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.8rem;
      text-align: center;
      font-size: 1.3rem;
    }
  }

  .mgstudio {
    margin-top: -2em;
    @media only screen and (min-width: 421px) {
      margin-top: -5em;
    }
    @media only screen and (min-width: 769px) and (max-width: 1023px) {
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      margin-top: -2em;
    }

    @media only screen and (min-width: 1367px) {
    }
  }

  .aukioloajat {
    @media only screen and (max-width: 420px) {
      margin-top: 2em;
    }
    @media only screen and (min-width: 421px) {
      margin-top: -2em;
    }
    @media only screen and (min-width: 769px) and (max-width: 1023px) {
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      margin-top: -1em;
    }

    @media only screen and (min-width: 1367px) {
    }
  }

  .margin {
    display: flex;
    margin-bottom: 2em;
    @media only screen and (min-width: 540px) and (max-width: 1023px) {
      padding-bottom: 3em;
    }
  }

  .phone {
    display: flex;
    justify-content: center;
    width: 3.4em;
    margin-bottom: 2em;
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
    color: #000;
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
    display: flex;
    justify-content: center;
    font-family: Playfair Display, Times New Roman, serif;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 2px;
    color: #000;
    text-align: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.6rem;
      text-align: center;
      margin-top: -2em;
    }
    @media only screen and (min-width: 1440px) {
      font-size: 1.8rem;
      padding-top: 1.8em;
    }
  }

  h3 {
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    text-align: center;
    border-color: rgba(159, 73, 118, 0.5);
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5em;
    letter-spacing: 1px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.3rem;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 1.5rempx;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 1.7rem;
      text-align: center;
    }
  }

  p {
    text-align: center;
    font-family: Playfair Display, Times New Roman, serif;
    color: #000;
    font-weight: 400;
    border-color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      line-height: 1.2rem;
      font-size: 1rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 1.5em;
      font-size: 1.2rem;
    }

    @media only screen and (min-width: 1367px) {
      line-height: 1.8rem;
      text-align: center;
      font-size: 1.3rem;
    }
  }

  .phone {
    display: flex;
    justify-content: center;
    width: 3em;
    margin-bottom: 2em;
  }

  .facebook {
    display: flex;
    justify-content: center;
    width: 2.8em;
    margin-bottom: 1em;
    margin-top: -0.4em;
  }

  .instagram {
    display: flex;
    justify-content: center;
    width: 3em;
    margin-bottom: 2em;
  }

  .link {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    line-height: 1.7;
    font-family: Playfair Display;
    text-decoration: underline;
  }

  .explore {
    color: #000;
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

export default SectionWrapper;
