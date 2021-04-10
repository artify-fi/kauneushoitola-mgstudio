import styled from 'styled-components';

const NewsletterWrapper = styled.div`
  position: relative;
  background-color: #fafae4;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 80px;

  @media (max-width: 1220px) {
    padding: 35px 40px;
  }
  @media (max-width: 575px) {
    padding: 35px 20px;
  }

  .link {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: #bd5f91;
    line-height: 1.7;
    font-family: Playfair Display;
    text-decoration: underline;
  }

  .button {
    display: flex;
    justify-content: center;
    background-color: #892121;
    margin-bottom: 2em;
    margin-top: 1em;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 990px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export default NewsletterWrapper;
