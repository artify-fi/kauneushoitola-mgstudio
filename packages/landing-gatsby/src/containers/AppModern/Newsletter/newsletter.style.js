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
    }
  }

  .link {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: #ff3f66;
    line-height: 1.7;
    font-family: Playfair Display;
    text-decoration: underline;
  }

  .phone {
    display: flex;
    justify-content: center;
    width: 3.4em;
    margin-bottom: 1em;
  }

  .button {
    display: flex;
    justify-content: center;
    color: #000;
    background-color: #ff3f66;
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
