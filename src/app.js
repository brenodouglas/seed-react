import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, RouterContext, browserHistory } from 'react-router';

import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      render={props => <RouterContext {...props} />}
    />
  </Provider>,
  document.getElementById('app')
);
