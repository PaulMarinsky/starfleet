import React from 'react';
import auth from './auth';
import { PromiseProvider } from 'mongoose';

export const LandingPage = (props) => {
  return (
    <div>Landing page</div>
    <button
      onClick={
        () => {
          auth.login(() => {
            props.history.push('/app')
          });
        }
      }
    > Login</button >
  );
}