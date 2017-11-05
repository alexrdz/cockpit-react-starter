import React from 'react';
import {connect} from 'react-redux';
import Page from '../components/Page'
import {fetchPage} from '../actions/index';

function mapStateToProps(state, ownProps) {
  const {page} = ownProps.match.params;
  console.log('state', state.pages.Body);

  if (state.pages.Body) {
    const {Body} = state.pages
    return {
      page,
      Body
    }
  }
  // if (state.pages.Body > 0 ) {
  //   const {Body} = state.pages[page];
  //
  //   return {
  //     ...state,
  //     page,
  //     Body
  //   }
  // }
  //
  //
  // return {
  //   ...state,
  //   page,
  //   Body: '<p>no content set yet</p>'
  // }
  return {
    page,
    content: 'hi'
  }
}
export default connect(mapStateToProps, {fetchPage})(Page);