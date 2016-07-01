import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouterContext, browserHistory } from 'react-router';

import routes from './routes';

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
    render={props => <RouterContext {...props} />}
  />,
  document.getElementById('app')
);
