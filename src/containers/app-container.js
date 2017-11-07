import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import App from '../components/App';
import {fetchPages} from '../actions/index';
import {fetchHomePage} from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPages,
    fetchHomePage
  }, dispatch);
}

const mapStateToProps = (state) =>{
  return {
    pages: state.pages,
    homepage: state.pages.homepage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
