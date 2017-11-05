import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';


class App extends Component {

  componentDidMount() {
    this.props.fetchPages();
  }

  render() {

    const {pages} = this.props;

    if (Object.keys(pages).length > 0) {
      const nav = _.map(pages, page =>
        <Link to={`/${page.Title_slug}`} key={page._id} state={{body: page.Body}}><li>{page.Title}</li></Link>
      );

      return (
        <div className="App">
          <header className="App-header">

            <h1 className="App-title">App component header</h1>
          </header>
          <p className="App-intro">
            APp component content
          </p>
          <ul>
            {nav}
          </ul>
        </div>
      );
    }

    return 'Loading...';
  }
}

export default App;
