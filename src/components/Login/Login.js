import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-services";
import "./Login.css";
import TokenService from "../../services/token-service";
// import Context from "../../contexts/Context";
import Context from "../../contexts/Context.js";

export default class Nav extends Component {
  static contextType = Context;

  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {
    error: null,
    pinballer_user_id: null,
    user_first_name: null,
    user_last_name: null,
    user_email: null,
    admin_access: false
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;
    AuthApiService.postLogin({
      user_nick_name: username.value,
      user_password: password.value
    })
      .then(res => {
        // console.log(`res.dbUser`, res.dbUser);
        // console.log(
        //   `res.dbUser.pinballer_user_id`,
        //   res.dbUser.pinballer_user_id
        // );
        this.context.pinballer_user_id = res.dbUser.pinballer_user_id;
        window.sessionStorage.setItem(
          "pinballer_user_id",
          res.dbUser.pinballer_user_id
        );
        this.context.user_nick_name = res.dbUser.user_nick_name;
        window.sessionStorage.setItem(
          "user_nick_name",
          res.dbUser.user_nick_name
        );
        this.context.admin_access = res.dbUser.admin_access;
        window.sessionStorage.setItem("admin_access", res.dbUser.admin_access);
        this.context.user_first_name = res.dbUser.user_first_name;
        window.sessionStorage.setItem(
          "user_first_name",
          res.dbUser.user_first_name
        );
        this.context.user_first_name = res.dbUser.user_last_name;
        window.sessionStorage.setItem(
          "user_last_name",
          res.dbUser.user_last_name
        );
        console.log("this context", this.context);
        this.setState({
          user: res.dbUser,
          hasDataLoaded: true
        });
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
    console.log("this.state.hasDataLoaded", this.state.hasDataLoaded);
    if (this.state.hasDataLoaded = true) {
      this.props.history.push("/account");
    }
  };

  state = { error: null };

  render() {
    console.log("Context", this.context);
    console.log(`user`, this.state.user);
    return (
      <div>
        <header role="banner">
          <h1>Log-in</h1>
          <h2>Enter your email and password</h2>
        </header>
        <section>
          <form onSubmit={this.handleSubmitJwtAuth} className="signin-form">
            <div>
              <label htmlFor="username" className="hide-element">
                Nick name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Nickname"
              />
            </div>
            <div>
              <label htmlFor="password" className="hide-element">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            {/* <Link to="/account"> */}
            <button type="submit">Sign In</button>
            {/* </Link> */}
          </form>
        </section>
      </div>
    );
  }
}
