import React from 'react';
import { Switch } from 'react-router';
import ProtectedRoute from '../protected/protected-route';
import Home from '../home/home';

export const Body = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/oi/home" component={Home} />
      </Switch>
    </div>
  );
};
