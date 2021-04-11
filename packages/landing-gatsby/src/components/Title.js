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
  margin-top: -3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    z-index: 1;
    position: fixed;
    font-family: 'Playfair Display';
    font-size: 1.4rem;
    font-weight: 400;
    color: #f7f4f4;
    padding: 0.5rem;
    margin-bottom: 6rem;
    border: 2px 0 2px 0;
    border-top: 2px solid rgba(20, 28, 45, 0.95);
    border-bottom: 2px solid rgba(20, 28, 45, 0.95);
    border-color: #f7f4f4;

    @media only screen and (min-width: 440px) and (max-width: 998px) {
      font-size: 2rem;
      margin-bottom: 6rem;
      border-color: #f7f4f4;
    }

    @media only screen and (min-width: 999px) and (max-width: 1366px) {
      font-size: 2.8rem;
      margin-bottom: 2rem;
      border-color: #f7f4f4;
    }

    @media only screen and (min-width: 1366px) {
      font-size: 3.4rem;
      margin-bottom: 0.11rem;
      border-color: #f7f4f4;
    }
  }
`;
export default Title;
