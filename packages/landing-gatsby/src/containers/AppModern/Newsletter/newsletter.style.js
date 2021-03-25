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
