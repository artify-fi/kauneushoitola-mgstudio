import styled from 'styled-components';

const EilikaImageWrapper = styled.section`
  text-align: center;
  margin: 5% auto;

  /* [1] The container */
  .zoom {
    height: 300px; /* [1.1] Set it as per your need */
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  }

  /* [2] Transition property for smooth transformation of images */
  .zoom img {
    transition: transform 0.5s ease;
  }

  /* [3] Finally, transforming the image when container gets hovered */
  .zoom:hover img {
    transform: scale(1.08);
  }
`;
export default EilikaImageWrapper;
