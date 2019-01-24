import React from 'react';
import auth from '../auth';
// import { PromiseProvider } from 'mongoose';

export const LandingPage = props => {
  return (
    <div>
      <div>Landing page</div>

      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push('/');
          });
        }}
      >
        logout
      </button>
    </div>
  );
};
