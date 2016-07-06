import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, browserHistory } from 'react-router';
import RouterFetch from './components/routerFetch';

import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      render={props => <RouterFetch {...props} />}
    />
  </Provider>,
  document.getElementById('app')
);
