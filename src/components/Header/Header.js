import React from 'react';
import PropTypes from 'prop-types';
import { head, title, subTitle, hrStyle } from './styles.css';

import { Navigation } from 'components';

export default function Header (props) {
  return (
    <div className={head}>
      <div className={title}>{'Мұхтар Мағауин'}</div>
      <div className={subTitle}>{'Қазақ тарихының жазушысы'}</div>
      <hr className={hrStyle}/>
      <Navigation />
    </div>
  );
}

Header.propTypes = {};
