import React from 'react';
import PropTypes from 'prop-types';

Homepage.propTypes = {
  craft: PropTypes.string,
  mission: PropTypes.string,
  beers: PropTypes.string
}

function Homepage(props) {
  const {
    Craft,
    Mission,
    Beers} = props.homepage;

  return (
    <div>
      the homepage component.
      <h3>{Craft}</h3>
      <p>{Mission}</p>
      <h4>{Beers}</h4>
    </div>
  );
}

export default Homepage;
