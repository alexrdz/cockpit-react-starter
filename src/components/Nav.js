import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';

export default (props) => {
  const {pages} = props;
  const childPages = _.omit(pages, 'home');
  const nav = _.map(childPages, page =>
    <Link to={`/${page.Title_slug}`} key={page._id}>
      <li>{page.Title}</li>
    </Link>
  );

  return (
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        {nav}
      </ul>
    </nav>
  )
}