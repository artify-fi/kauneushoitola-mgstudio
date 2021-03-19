import React from 'react';

import NewsletterSectionWrapper from './newsletterSection.style';

const NewsLetterSection = () => {
  return (
    <NewsletterSectionWrapper>
      <section className="newsletter-page">
        <div className="page-center">
          {/* <h3>Viimeiset kirjoitukset suoraan postiisi</h3> */}
          <form
            className="contact-form"
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact" />

            <input
              type="text"
              name="name"
              placeholder="Nimi"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Sähköposti"
              className="form-control"
            />
            <button
              type="submit"
              className="btn form-control submit-btn"
              alt="ilmainen verkkoanalyysi"
            >
              <label>Haluan verkkoanalyysiin sähköpostiini</label>
            </button>
          </form>
        </div>
      </section>
    </NewsletterSectionWrapper>
  );
};

export default NewsLetterSection;

//import React from 'react';
// import PropTypes from 'prop-types';
// import Box from 'common/src/components/Box';
// import Heading from 'common/src/components/Heading';
// import Input from 'common/src/components/Input';
// import Button from 'common/src/components/Button';
// import Container from 'common/src/components/UI/Container';
// import NewsletterSectionWrapper, {
//   NewsletterForm,
// } from './newsletterSection.style';

// const NewsletterSection = ({ sectionHeader, sectionTitle, btnStyle }) => {
//   return (
//     <NewsletterSectionWrapper id="newsletterSection">
//       <Container>
//         <Box {...sectionHeader}>
//           <Heading content="Subscribe Newsletter" {...sectionTitle} />
//         </Box>
//         <Box>
//           <NewsletterForm>
//             <Input
//               inputType="email"
//               isMaterial={false}
//               placeholder="Email Address"
//               name="email"
//               aria-label="email"
//             />
//             <Button type="button" title="SEND MESSAGE" {...btnStyle} />
//           </NewsletterForm>
//         </Box>
//       </Container>
//     </NewsletterSectionWrapper>
//   );
// };

// // NewsletterSection style props
// NewsletterSection.propTypes = {
//   sectionHeader: PropTypes.object,
//   sectionTitle: PropTypes.object,
//   sectionSubTitle: PropTypes.object,
// };

// // NewsletterSection default style
// NewsletterSection.defaultProps = {
//   // section header default style
//   sectionHeader: {
//     mb: '56px',
//   },
//   // section title default style
//   sectionTitle: {
//     textAlign: 'center',
//     fontSize: ['20px', '24px'],
//     fontWeight: '400',
//     color: '#0f2137',
//     letterSpacing: '-0.025em',
//     mb: '0',
//   },
//   // button default style
//   btnStyle: {
//     minWidth: '152px',
//     minHeight: '45px',
//     fontSize: '14px',
//     fontWeight: '500',
//   },
// };

//export default NewsletterSection;
