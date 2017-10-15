import React from 'react';
import PropTypes from 'prop-types';
import { head, title, subTitle, hrStyle } from './styles.css';

import { Navigation } from 'components';

export default function Header (props) {
  return (
    <div className={head}>
      <div className={title}>{'Title'}</div>
      <div className={subTitle}>{'subtitle'}</div>
      <hr className={hrStyle}/>
      <Navigation />
    </div>
  );
}

Header.propTypes = {};
