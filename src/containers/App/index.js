import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.css';
import { carregarUser } from './../../store/actions';

class App extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func
  }

  static fetch(dispatch) {
    return dispatch(carregarUser({
      name: 'users',
      uri: 'users/brenodouglas',
      baseUri: 'https://api.github.com'
    }));
  }

  render() {
    console.log(this.props);
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
