import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './layout/App';
import DetailApp from './layout/DetailApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path = '/detail' component = {DetailApp} />
      <Route path = '/' component = { App } />
    </Switch>
  </HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
