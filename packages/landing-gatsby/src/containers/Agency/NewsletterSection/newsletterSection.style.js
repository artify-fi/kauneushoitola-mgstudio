import styled from 'styled-components';

const NewsletterSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 575px) {
    padding: 20px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
    max-width: 100%;
  }
  @media (max-width: 990px) {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 40px 0 60px 0;
  }
`;

export default NewsletterSectionWrapper;
