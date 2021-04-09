import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  @media only screen and (max-width: 1440px) {
    @media only screen and (max-width: 1024px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 480px) {
      margin-top: 2em;
    }

    .palvelumme {
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 1.8;
      color: #bd5f91;
      font-family: Playfair Display;
      letter-spacing: 3px;
      margin-top: 2em;
      margin-bottom: 2em;
      @media only screen and (max-width: 1440px) {
        font-size: 1.4rem;
      }
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 1.2rem;
      }
      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
        text-align: center;
      }
    }
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 40%;
  margin-top: -2em;
  margin-left: 4vw;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    width: 43%;
    margin-top: 10em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 48%;
    margin-top: 8em;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.1em;
    letter-spacing: 1px;
    text-align: center;

    @media only screen and (max-width: 1440px) {
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.1rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
    @media only screen and (max-width: 420px) {
      font-size: 1.2rem;
      text-align: center;
      margin-top: -1.6rem;
    }
  }
  .icon {
    color: #bd5f91;
    font-size: 1.2em;
  }
  p {
    font-size: clamp(
      var(--fluid-type-min, 1rem),
      calc(1rem + var(--fluid-type-target, 3vw)),
      var(--fluid-type-max, 1.3rem)
    );
    line-height: 1.5rem;
    /* @media only screen and (min-width: 1024px) and (max-width: 1366px) {
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
    } */
  }

  a {
    background: linear-gradient(currentColor 0 0) left var(--p, 50%) bottom 0 /
        var(--d, 10%) 3px no-repeat,
      linear-gradient(currentColor 0 0) right var(--p, 50%) bottom 0 /
        var(--d, 10%) 3px no-repeat;
    transition: 0.3s, background-position 0.3s 0.3s;
  }

  a:hover {
    --d: 50%;
    --p: 50.1%;
    transition: cubic-bezier(0, 500, 1, 500) 0.3s, background-size 0.3s 0.3s;
  }
  .explore {
    color: #2d3a56;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 42px;
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      margin-left: 1em;
      width: 100%;
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 420px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      margin-left: 1em;
      width: 100%;
      font-size: 1.4rem;
    }
  }

  .image {
    display: flex;
    max-width: 20em;
    margin-top: 12em;
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      width: 20em;
      margin-top: 10em;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width: 48%;
      margin-top: 8em;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ListGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  column-count: 1;
  column-width: 96vw;
  margin-top: 30px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 25px;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 98%;
  }

  @media only screen and (max-width: 411px) {
    column-count: 1;
  }
  .list-item {
    display: flex;
    align-items: center;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.3rem;
      color: #fff;
    }
    img {
      margin-right: 16px;
    }
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
`;

export const Illustration = styled.figure`
  display: flex;
  justify-content: center;
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
