import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, { MilestoneCard } from './milestoneBlock.style';

const MilestoneBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        milestoneData {
          title
          amount
          text
        }
      }
    }
  `);

  const { title, amount, text, counterItems } = data.charityJson.milestoneData;

  return (
    <Container id="milestone" width="1260px">
      <BlockWrapper>
        <MilestoneCard>
          <Heading as="h2" content={amount} />
          <Text content={text} />
        </MilestoneCard>
      </BlockWrapper>
    </Container>
  );
};

export default MilestoneBlock;
