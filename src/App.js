import React from "react";
import "./App.css";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
    <div>
      <Router>
        <Redirect to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
