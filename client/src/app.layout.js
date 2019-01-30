import React from 'react';

export const LandingPage = props => {
  return;
  <div>
    <h1>App Layout</h1>
    <button
      onClick={() => {
        auth.logout(() => {
          props.history.push('/');
        });
      }}
    >
      Logout
    </button>
  </div>;
};
