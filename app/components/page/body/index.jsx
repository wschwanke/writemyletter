import React from 'react';

import Header from 'components/page/header';
import Footer from 'components/page/footer';

const Body = ({ title, children }) => {
  document.title = title;

  return (
    <div className="content">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
