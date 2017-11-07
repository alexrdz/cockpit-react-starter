import React from 'react';
import PropTypes from 'prop-types';

Page.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.object,
  Body: PropTypes.string
}

function Page(props) {
  const {page, pages} = props;
  const {Body} = pages[page];

  return (
    <div dangerouslySetInnerHTML={{__html: Body}} />
  );
}

export default Page;