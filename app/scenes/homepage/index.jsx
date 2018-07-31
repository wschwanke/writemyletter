/**
 * External dependencies
 */
import React from 'react';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import Body from 'components/page/body';

const Homepage = () => (
  <Body>
    <Helmet>
      <title>Write My Letter - Home</title>
      <meta name="keywords" content="keywords go here dude" />
    </Helmet>
  </Body>
);

export default Homepage;
