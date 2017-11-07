import React from 'react';
import PropTypes from 'prop-types';

function Page(props) {
  let Body;
  const {page, pages} = props;

  if (props.pages[page]) {
    Body = pages[page].Body;
  }

  function renderContent() {
    return <div dangerouslySetInnerHTML={{__html: Body}} />
  }

  return pages[page] ? renderContent() : <div>Loading content...</div>
}

Page.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.object,
  Body: PropTypes.string
}

export default Page;