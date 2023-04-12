import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import Topics from './containers/topics';

const render = Component => {
  ReactDOM.render(
    <HashRouter>
      <Component>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </Component>
    </HashRouter>,
    document.getElementById('app')
  );
};

render(App);
