import {connect} from 'react-redux';

import Homepage from '../components/Homepage'

function mapStateToProps (state) {
  const {homepage} = state.pages;

  return {
    homepage
  }
}
export default connect(mapStateToProps)(Homepage);