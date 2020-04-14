import React from 'react';
import { Switch } from 'react-router';
import ProtectedRoute from '../protected/protected-route';
import Home from '../home/home';
import Csoportok from '../csoportok/csoportok';

export const Body = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/oi/home" component={Home} />
        <ProtectedRoute path="/oi/csoportok" component={Csoportok} />
      </Switch>
    </div>
  );
};
