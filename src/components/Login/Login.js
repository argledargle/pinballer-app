import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-services"
import "./Login.css";

export default class Nav extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;
    AuthApiService.postLogin({
      user_nick_name: username.value,
      user_password: password.value
    })
      .then(res => {
        username.value = "";
        password.value = "";
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
      this.props.history.push("/account")
  };

  state = { error: null };

  render() {
    
    return (
      <div>
        <header role="banner">
          <h1>Log-in</h1>
          <h2>Enter your email and password</h2>
        </header>
        <section>
          <form onSubmit={this.handleSubmitJwtAuth} className="signin-form">
            <div>
              <label htmlFor="username">Nick name</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            {/* <Link to="/account"> */}
              <button type="submit">
                Sign In
              </button>
            {/* </Link> */}
          </form>
        </section>
      </div>
    );
  }
}
