import {connect} from 'react-redux';
import Page from '../components/Page'

function mapStateToProps(state, ownProps) {
  const {page} = ownProps.match.params;

  if (state.pages.Body) {
    const {Body} = state.pages[page];

    return {
      ...state,
      page,
      Body
    }
  }


  return {
    ...state,
    page,
    Body: '<p>no content set yet</p>'
  }
}
export default connect(mapStateToProps)(Page);