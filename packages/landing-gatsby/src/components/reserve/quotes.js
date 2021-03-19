import React from 'react'
import Text from 'common/src/components/Text';
import { DiscountLabel } from './bannerSection.style';

const quotes = () => {
  return (
    <DiscountLabel>
      <Text content="No website can stand without a strong backbone. " />
      <br />
      <Text content="And that backbone is technical SEO." />
      <br />
      <Text content="Neil Patel" />
    </DiscountLabel>
  )
}

export default quotes
