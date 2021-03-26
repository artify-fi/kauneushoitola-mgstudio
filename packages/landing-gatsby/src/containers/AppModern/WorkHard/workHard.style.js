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
  display: flex;

  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 14em;
  }
`;

export const Content = styled.div`
  width: 40%;
  margin-top: 12em;
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
    margin-top: 12em;
    margin-top: 12em;
    
  }

  h2 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.52;
    letter-spacing: -1px;
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
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
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

    /* i {
      line-height: 1;
      margin-left: 2px;
      transition: 0.3s ease 0s;
    }
    &:hover i {
      margin-left: 7px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 25px;
    }
  } */
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
/* 
export const ListGroup = styled.div`  
  margin-top: 30px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 25px;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 70%;
    margin-top: 40px;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 411px) {
    column-count: 1;
  }
  .list-item {
    display: flex;
    align-items: center;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
    }
    img {
      margin-right: 10px;
    }
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
`; */

export default SectionWrapper;
