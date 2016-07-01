import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.css';

class App extends Component {
  render() {
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
