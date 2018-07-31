/**
 * External dependencies
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import Body from 'components/page/body';

const Homepage = () => (
  <Body>
    <Helmet>
      <title>Write My Letter - Homepage</title>
      <meta name="keywords" content="keywords go here dude" />
    </Helmet>
  </Body>
);

export default withRouter(Homepage);
