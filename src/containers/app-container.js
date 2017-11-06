import {connect} from 'react-redux';

import App from '../components/App';
import {fetchPages} from '../actions/index';

function mapStateToProps(state) {
  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps, {fetchPages})(App);
