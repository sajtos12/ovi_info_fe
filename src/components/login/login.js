import React, { useRef, useState, Component, createRef } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector, connect } from 'react-redux';
import { login as loginToBe } from '../../actions/login';

const mapDispatchToProps = (dispatch) => {
  return {
    loginToBe: (username, password) => dispatch(loginToBe(username, password)),
  };
};

class ConnectedLogin extends Component {
  usernameRef = createRef();
  passwordRef = createRef();

  state = {
    valid: true,
    success: false,
    showError: false,
    timeout: null,
  };

  onChange = () => {
    if (
      this.usernameRef.current.value !== '' &&
      this.passwordRef.current.value !== ''
    ) {
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
    }
  };

  login = async (event) => {
    event.preventDefault();

    await this.props.loginToBe(
      this.usernameRef.current.value,
      this.passwordRef.current.value
    );

    if (!this.props.status) {
      clearTimeout(this.state.timeout);
      this.setState({
        showError: true,
        timeout: setTimeout(() => {
          this.closeError();
        }, 5000),
      });
    }

    this.setState({ success: this.props.status });
  };

  closeError = () => {
    this.setState({ showError: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="hero is-medium is-desktop">
          <div className="hero-body">
            {this.state.showError && (
              <div
                className="notification is-danger"
                style={{
                  zIndex: 15,
                  position: 'absolute',
                  right: '1em',
                  top: '1em',
                }}
              >
                <button class="delete" onClick={this.closeError} />
                Sikertelen bejelentkezés!
              </div>
            )}
            <div className="columns is-centered">
              <div className="column is-one-quarter">
                <h1 className="title columns is-centered">Bejelentkezés</h1>
                <div className="container">
                  <form onSubmit={this.login}>
                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="text"
                          placeholder="Felhasználónév"
                          ref={this.usernameRef}
                          onChange={this.onChange}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-user" />
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="password"
                          placeholder="Jelszó"
                          ref={this.passwordRef}
                          onChange={this.onChange}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock" />
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button
                          className="button is-primary"
                          disabled={this.state.valid}
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

        {this.state.success && <Redirect from="**" to="/oi/home" />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.loginReducer.status,
  token: state.loginReducer.token,
});

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);

export default Login;
