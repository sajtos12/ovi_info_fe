import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout as signOut } from '../../actions/login';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLogout(false);
  }, []);

  const openMenu = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(signOut());
    setLogout(true);
  };

  return (
    <nav className="navbar is-primary" role="navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <i className="fas fa-rocket" />
          OVI-INFO
        </div>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={openMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={'navbar-menu' + (open === true ? ' is-active' : '')}>
        <div className="navbar-start">
          <div className="navbar-item">
            <NavLink to="/oi/home">
              <button className="button">
                <i className="fas fa-home" />
                Főoldal
              </button>
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink to="/oi/csoportok">
              <button className="button">
                <i class="fas fa-user-friends" />
                Csoportok
              </button>
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt" /> Kijelentkezés
            </button>
          </div>
        </div>
      </div>
      {logout && <Redirect from="**" to="/home" />}
    </nav>
  );
}
