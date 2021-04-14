import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 16px;
      padding-right: 16px;
    `};
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: ${(props) => props.width || '1170px'};
    padding: 0;
  }
  @media (min-width: 1400px) {
    padding: 0;
    max-width: ${(props) => props.width || '1300px'};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 10px;
        padding-right: 10px;
      `};
  }
`;

export default ContainerWrapper;
