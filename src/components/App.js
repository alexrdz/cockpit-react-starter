import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Nav from './Nav';
import Page from '../containers/page-container';
import Homepage from '../containers/homepage-container';

class App extends Component {

  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    const {pages} = this.props;
    // const Homepage = () => {
    //   const homePageContent = pages['home'].Body;
    //
    //   return (
    //     <div dangerouslySetInnerHTML={{__html: homePageContent}} />
    //   );
    // }

    if (Object.keys(pages).length > 0) {
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

    return 'Loading...';
  }
}

export default App;
