import React from "react";
import "./App.css";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/login";

function App() {
  return (
    <div>
      <Router>
        <Redirect to="/login" />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
