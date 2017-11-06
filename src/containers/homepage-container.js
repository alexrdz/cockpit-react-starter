import {connect} from 'react-redux';
import _ from 'lodash';

import Homepage from '../components/Homepage'
import {fetchHomePage} from '../actions/index';

function mapStateToProps (state, ownProps) {
  const {homepage} = state.pages;
  state.pages = _.omit(state.pages, 'homepage');
  return {
    ...state,
    homepage
  }
}
export default connect(mapStateToProps, {fetchHomePage})(Homepage);