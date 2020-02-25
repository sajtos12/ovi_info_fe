import React, { useState } from "react";
import { Redirect } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
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
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={openMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={"navbar-menu" + (open === true ? " is-active" : "")}>
        <div className="navbar-start">
          <div className="navbar-item">
            <button className="button">
              <i className="fas fa-home" />
              Főoldal
            </button>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button" onClick={handleLogout}>
              <i class="fas fa-sign-out-alt" /> Kijelentkezés
            </button>
          </div>
        </div>
      </div>
      {logout && <Redirect from="**" to="/home" />}
    </nav>
  );
}
