import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';

import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MasterPage}>
    </Route>
  </Router>,
  document.getElementById('app-container')
);