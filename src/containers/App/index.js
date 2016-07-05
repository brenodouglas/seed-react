import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.css';
import { CALL_API_REQUEST, CALL_API_SUCCESS, CALL_API_FAILURE } from './../../store/actions/types';

class App extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func
  }

  render() {
    const { dispatch } = this.props;

    dispatch({
      types: [
        CALL_API_REQUEST,
        CALL_API_SUCCESS,
        CALL_API_FAILURE
      ],
      uri: '/users/brenodouglas',
      baseUri: 'https://api.github.com'
    });

    return (
      <section className={styles.row}>
        <div className={styles.column}>
        9
        </div>
        <div className={styles.column}>
        2
        </div>
        <div className={styles.column}>
        3
        </div>
        <div className={styles.column}>
        4
        </div>
      </section>
    );
  }
}

export default connect((state) => state)(App);
