import _ from 'lodash';
import { FETCH_PAGE, FETCH_PAGES } from '../constants/index'

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_PAGES:
      return _.mapKeys(action.payload.data.entries, 'Title_slug');

    case FETCH_PAGE:
      return {
        ...state,
        page: action.payload
      }

    default:
      return state;
  }
}