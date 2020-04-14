import React from 'react';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ component, path }) => {
  const isAuth = () => {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <React.Fragment>
      {isAuth() ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect from="**" to="/login" />
      )}
    </React.Fragment>
  );
};

export default ProtectedRoute;
