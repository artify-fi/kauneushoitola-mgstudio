import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Nav from './navbar/Navbar';

import BackgroundImage from 'gatsby-background-image';

const query = graphql`
  {
    person: file(relativePath: { eq: "abstract_background_small.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const JustHero = () => {
  const { person } = useStaticQuery(query);
  return (
    <BackgroundImage fluid={person.childImageSharp.fluid}>
      <div style={{ padding: '1em', marginBottom: '2em' }}>
        <Nav />
      </div>
    </BackgroundImage>
  );
};

const Hero = styled(JustHero)`
  height: 100vh;
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8em;
`;

export default Hero;
