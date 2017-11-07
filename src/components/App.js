import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Nav from './Nav';
import Page from '../containers/page-container';
import Homepage from '../containers/homepage-container';

class App extends Component {

  componentDidMount() {
    this.props.fetchPages();
    this.props.fetchHomePage();
  }

  render() {
    const {pages, homepage} = this.props;

    if (homepage) {
      return (
        <HashRouter>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">App component header</h1>
              <Nav pages={pages} />
            </header>
            <p className="App-intro">
              APp component content
            </p>
            <Route path="/:page" component={Page} />
            <Route exact path="/" component={Homepage} />
          </div>
        </HashRouter>
      );
    }

    this.props.fetchHomePage();
    return 'Loading...';
  }
}

export default App;
