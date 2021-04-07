import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Image from 'common/src/components/Image';
import List from 'common/src/components/List';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './workHard.style';

import illustration from 'common/src/assets/image/agencyModern/mg-studio-logo-large.png';

const WorkHard = () => {
  const Data = useStaticQuery(graphql`
    query {
      Tick: file(relativePath: { eq: "image/agencyModern/tick-circle.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      agencyModernJson {
        workHardList {
          id
          title
        }
      }
    }
  `);

  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content style={{ marginTop: '-3em' }}>
            <Heading as="h2" content="PALVELUMME" />
            <ListGroup>
              {Data.agencyModernJson.workHardList.map((item) => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={
                    <Image
                      fluid={
                        (Data.Tick !== null) | undefined
                          ? Data.Tick.childImageSharp.fluid
                          : {}
                      }
                      src={Data.Tick.childImageSharp.fluid.src}
                      objectFit="contain"
                      alt="Tick Icon"
                    />
                  }
                />
              ))}
            </ListGroup>
            {/* <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link> */}
          </Content>
          <Illustration>
            <Image
              style={{ maxWidth: '36vw' }}
              src={illustration}
              alt="Illustration"
            />
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;
