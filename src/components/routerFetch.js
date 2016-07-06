import React, { Component, PropTypes } from 'react';
import { RouterContext } from 'react-router';
import { loadDataForComponents } from './../store/actions';

export default class RouterFetch extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.context.store.dispatch(loadDataForComponents(this.props))
    .then(() => this.forceUpdate());
  }

  render() {
    return <RouterContext {...this.props} />;
  }
}
