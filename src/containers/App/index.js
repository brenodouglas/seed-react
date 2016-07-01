import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.css';

class App extends Component {
  render() {
    return (
      <section>
        <h1 className={styles.h1}>Hello Word!</h1>
      </section>
    );
  }
}

export default connect((state) => state)(App);
