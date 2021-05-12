import styled from 'styled-components';

const BlogSectionWrapper = styled.section`
  padding: 80px 0;
  padding-bottom: 0px;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    padding: 5px 0;
  }

  .feature__block {
    &.blog__post {
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      width: calc(100% / 2);
      margin: auto;
      height: 84vh;
      transition: all 0.3s ease;
      @media only screen and (min-width: 1201px) and (max-width: 1440px) {
        height: 76vh;
      }
      @media only screen and (min-width: 1099px) and (max-width: 1200px) {
        height: 70vh;
      }
      @media only screen and (max-width: 991px) {
        width: calc(100% / 2);
        margin-bottom: 24px;
        height: 60vh;
      }
      @media only screen and (max-width: 767px) {
        width: 90vw;
        height: 90vh;
      }
      @media only screen and (max-width: 420px) {
        width: 92vw;
        height: 70vh;
        margin-top: -1em;
        /* &:first-child {
          margin-top: 2em;
        }
        &:second-child {
          margin-top: -2em;
        } */
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
      /* &:first-child {
        .content__wrapper {
          @media (max-width: 990px) {
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
      } */
    }
  }
`;

export default BlogSectionWrapper;
