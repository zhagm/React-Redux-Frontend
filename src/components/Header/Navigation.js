import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { navigation, link, active } from './styles.css';

export default function Navigation (props) {
  return (
    <div className={navigation}>
      {props.navArray.map((n, i) => (
        <NavLink key={i} className={link} exact activeClassName={active} to={n.path}>{n.text}</NavLink>
      ))}
    </div>
  );
}

Navigation.propTypes = {
  navArray: PropTypes.array.isRequired
};

Navigation.defaultProps = {
  navArray: [
    { path: '/', text: 'HOME' },
    { path: '/about', text: 'ABOUT' },
    { path: '/contact', text: 'CONTACT' }
  ]
}
