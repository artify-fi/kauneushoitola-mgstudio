import React from 'react';
//import Layout from '../components/PostLayout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import Posts from '../components/Posts';

const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <>
      <Hero />
      <Posts posts={posts} title="viimeiste kirjoitukset" />
    </>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMM Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default PostsPage;
