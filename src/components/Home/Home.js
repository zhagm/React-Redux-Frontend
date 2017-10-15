import React, { Component } from 'react';
import { container, title, slogan } from './styles.css';
import { CarouselComponent } from 'components';
import PropTypes from 'prop-types';

export default class Home extends Component {
  render () {
    return (
      <div className={container}>
        {/* <CarouselComponent /> */}
      </div>
    );
  }
}

Home.propTypes = {};
