import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Router, BrowserHistory } from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={BrowserHistory}>
      <Route path='/' component={App} >
        <Route path='resources' component={Resources} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
