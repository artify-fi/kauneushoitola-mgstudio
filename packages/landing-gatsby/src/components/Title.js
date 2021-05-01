import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  margin-top: -9.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    z-index: 1;
    position: sticky;
    font-family: 'Playfair Display';
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
    padding: 0.5rem;
    margin-top: 1.6em;
    margin-bottom: 6rem;
    border: 2px 0 2px 0;
    border-top: 2px solid rgba(20, 28, 45, 0.95);
    border-bottom: 2px solid rgba(20, 28, 45, 0.95);
    border-color: #fff;

    @media only screen and (min-width: 440px) and (max-width: 998px) {
      font-size: 2rem;
      margin-top: -1em;
      margin-bottom: 8rem;
    }

    @media only screen and (min-width: 999px) and (max-width: 1366px) {
      font-size: 2.8rem;
      margin-top: -1em;
      margin-bottom: 3.6em;
    }

    @media only screen and (min-width: 1367px) {
      font-size: 3.4rem;
      margin-bottom: 2em;
    }
  }
`;
export default Title;
