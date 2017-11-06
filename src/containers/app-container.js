import {connect} from 'react-redux';
import _ from 'lodash';

import App from '../components/App';
import {fetchPages} from '../actions/index';

function mapStateToProps(state) {
  // state.pages = _.omit(state.pages, 'homepage');

  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps, {fetchPages})(App);
