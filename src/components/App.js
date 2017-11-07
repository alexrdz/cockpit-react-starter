import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Nav from './Nav';
import Page from '../containers/page-container';
import Homepage from '../containers/homepage-container';

class App extends Component {

  componentWillMount() {
    this.props.fetchPages();
    this.props.fetchHomePage();
  }

  renderContent() {
    const {pages} = this.props;
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

  render() {
    const {homepage} = this.props.pages;

    return homepage ? this.renderContent() : <div>Loading...</div>;
  }
}

export default App;
