import { combineReducers } from 'redux';
// import {reducer as formReducer} from 'redux-form';
import PagesReducer from './pages-reducer';

const rootReducer = combineReducers({
  pages: PagesReducer
});

export default rootReducer;
