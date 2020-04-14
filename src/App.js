import React from 'react';
import './App.css';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import ProtectedRoute from './components/protected/protected-route';
import { Main } from './components/skeleton/main';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/oi" component={Main} />
          <Redirect from="**" to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
