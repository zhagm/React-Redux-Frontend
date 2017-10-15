import React from 'react';
import { Home } from 'components';
import PropTypes from 'prop-types';

export default function HomeContainer () {
  return (
    <Home />
  );
}

Home.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}
