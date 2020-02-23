import React, { useRef, useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [valid, setValid] = useState(true);
  const [success, setSuccess] = useState(false);

  const onChange = () => {
    if (usernameRef.current.value !== "" && passwordRef.current.value !== "") {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const login = async event => {
    event.preventDefault();
    console.log(usernameRef.current.value);
    console.log("login");

    const token = await axios
      .post("http://localhost:8080/login", {
        userName: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .catch(err => console.log(err.message));
    console.log(token);
    //setSuccess(true);
  };

  return (
    <React.Fragment>
      <div className="hero is-medium is-desktop">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-one-quarter">
              <h1 className="title">Bejelentkezés</h1>
              <div className="container is-fullhd">
                <form onSubmit={login}>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Felhasználónév"
                        ref={usernameRef}
                        onChange={onChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Jelszó"
                        ref={passwordRef}
                        onChange={onChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button
                        className="button is-primary"
                        disabled={valid}
                        type="submit"
                      >
                        Bejelentkezés
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && <Redirect to="/home" />}
    </React.Fragment>
  );
}
