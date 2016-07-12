import React, { Component } from 'react';
import style from './styles.css';

export default class Profile extends Component {

  static propTypes = {
    data: React.PropTypes.object
  }

  render() {
    const { data } = this.props;

    return (
      <section className={style.row}>
        <aside className={style.columnLeft}>
          
        </aside>
        <main className={style.columnRight}>

        </main>
      </section>
    );
  }
}
