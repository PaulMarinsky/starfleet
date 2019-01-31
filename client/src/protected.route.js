// Since react router doesnt provide a way of protecting Routes,
// this must be done in order to provide a way of authenticating
// user on the client side.

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        // checks to see if the authenticated flag has been set to true
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
