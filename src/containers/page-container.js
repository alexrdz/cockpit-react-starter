import React from 'react';
import {connect} from 'react-redux';
import Page from '../components/Page'
import {fetchPage} from '../actions/index';

function mapStateToProps(state, ownProps) {
  const {page} = ownProps.match.params;

  if (Object.keys(state.pages).length > 0 ) {
    const {Body} = state.pages[page];

    return {
      ...state,
      Body
    }
  }
  
  fetchPage(page);

  return {
    ...state,
    page,
    Body: '<p>no content set yet</p>'
  }
}
export default connect(mapStateToProps)(Page);