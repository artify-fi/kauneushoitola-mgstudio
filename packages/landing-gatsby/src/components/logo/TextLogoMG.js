import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4) !important;
  z-index: 1;
  display: flex;
  align-items: center;
  margin-top: 3em;
  font-family: Playfair Display, Times New Roman, serif;
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
    margin-top: 2.2em;
  }
  @media only screen and (max-width: 1060px) {
    margin-left: 3em;
    width: 300px;
    font-size: 1.4rem;
    margin-top: 0px;
    padding-left: 0.6em;
  }
  @media only screen and (max-width: 991px) {
    margin-left: 3em;
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
    margin-left: 2.8em;
    padding-left: 0.8em;
  }
  @media only screen and (max-width: 620px) {
    margin-left: 2.6em;
  }
  @media only screen and (max-width: 420px) {
    width: 254px;
    margin-left: 0.6em;
    font-size: 1.36rem !important;
    padding-left: 0.6em;
  }
`;

const Button = () => {
  return (
    <ButtonWrapper>
      <span style={{ fontFamily: '' }}>MG Studio</span>
    </ButtonWrapper>
  );
};

export default Button;
