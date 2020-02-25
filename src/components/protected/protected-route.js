import React from "react";
import { Route, Redirect } from "react-router";

export default function ProtectedRoute({ component, path }) {
  const isAuth = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <React.Fragment>
      {isAuth() ? (
        <Route exact path={path} component={component} />
      ) : (
        <Redirect from="**" to="/login" />
      )}
    </React.Fragment>
  );
}
