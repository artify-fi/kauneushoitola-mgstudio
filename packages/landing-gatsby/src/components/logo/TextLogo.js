import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4) !important;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.6em;
  //box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8) !important;
  font-family: 'Great Vibes', cursive !important;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  margin-left: 2em;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem !important;
  @media only screen and (max-width: 1366px) {
    font-size: 1.4rem;
    margin-top: 2em;
  }
  @media only screen and (max-width: 991px) {
    font-size: 1.4rem;
    margin-top: 1em;
  }
  @media only screen and (max-width: 768px) {
    width: 340px;
    margin-top: 0em;
  }
  @media only screen and (max-width: 420px) {
    width: 260px;
    margin: 0;
    margin-left: 1em;
    font-size: 1.36rem !important;
  }
`;

const Button = () => {
  return <ButtonWrapper>MG Studio "Make you glow"</ButtonWrapper>;
};

export default Button;
