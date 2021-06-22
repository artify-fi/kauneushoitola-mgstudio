import styled from 'styled-components';

const BlogSectionWrapper = styled.section`
  padding: 10px 0;
  padding-bottom: 0px;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (max-width: 990px) {
    padding: 10px 0;
  }
  @media (max-width: 767px) {
    padding: 5px 0;
  }

  .feature__block {
    &.blog__post {
      display: flex;
      align-items: center;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      width: calc(100% / 2);
      margin: auto;
      padding: 1rem;
      margin-top: 4rem;
      height: 94vh;
      transition: all 0.3s ease;

      @media only screen and (max-width: 1220px) {
        margin-top: 3rem;
        height: 84vh;
        margin-bottom: -8rem;
      }
      @media only screen and (max-width: 920px) {
        margin-bottom: -8rem;
        margin-top: 3rem;
        height: 76vh;
      }
      @media only screen and (max-width: 768px) {
        width: 90vw;
        height: 100vh;
        margin-bottom: -1rem;
      }
      @media only screen and (max-width: 640px) {
        height: 92vh;
        margin-bottom: -4rem;
      }
      @media only screen and (max-width: 480px) {
        margin-bottom: -14rem;
      }
      @media only screen and (max-width: 375px) {
        margin-bottom: -18rem;
      }
      @media only screen and (max-width: 360px) {
        margin-bottom: -13rem;
      }
    }

    .icon__wrapper {
      position: absolute;
      margin: auto;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        height: auto;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: auto;
      }

      .content__wrapper {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: rgba(0, 0, 0, 0.9);
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
        transition: all 0.3s ease;
        a {
          transform: translateY(50px);
          transition: all 0.3s ease;
        }
        p {
          transform: translateY(50px);
          transition: all 0.35s ease;
        }
      }

      &:hover {
        .content__wrapper {
          opacity: 1;
          visibility: visible;
          a {
            transform: translateY(0);
          }
          p {
            transform: translateY(0);
          }
        }
      }
    }
  }
`;

export default BlogSectionWrapper;
