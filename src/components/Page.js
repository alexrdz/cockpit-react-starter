import React from 'react';

export default (props) => {
  const {page, pages} = props;
  const {Body} = pages[page];

  return (
    <div dangerouslySetInnerHTML={{__html: Body}} />
  );
}
