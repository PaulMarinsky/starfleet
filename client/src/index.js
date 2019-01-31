import React from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history';
import SignInForm from './views/authentication/login';
import indexRoutes from './routes/index.jsx';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './protected.route';
import { HashRouter } from 'react-router-dom';

import './assets/scss/style.css';

//const hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return (
          <ProtectedRoute
            path={prop.path}
            key={key}
            component={prop.component}
          />
        );
      })}
      <Route exact path="/" component={SignInForm} />
      {/* <Route exact path="/signup" component={SignUpForm} /> */}
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
