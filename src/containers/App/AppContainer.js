import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Header } from 'components';
import {
  HomeContainer, AboutContainer, BooksContainer, GalleryContainer, DetailsContainer
} from 'containers';
import * as thingActionCreators from 'redux/modules/thing';

import { mainContainer } from 'sharedStyles/styles.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className={mainContainer}>
            <Switch>
              <Route exact={true} path='/' component={HomeContainer} />
              <Route path='/about' component={AboutContainer} />
              <Route path='/books' component={BooksContainer} />
              <Route path='/gallery' component={GalleryContainer} />
              <Route path='/details' component={DetailsContainer} />
              <Route render={() => <h1>{'404'}</h1>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {};

export default connect((state) => ({
  state: state
}), (dispatch) => (
  bindActionCreators(thingActionCreators, dispatch)
))(App);
