import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import {fetchPages} from './actions/index';
import reducers from './reducers';
import App from './containers/app-container';
import Page from './containers/page-container';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <div>
        <Switch>
          <Route path="/:page" component={Page} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
