import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-services";
import "./Login.css";
import TokenService from "../../services/token-service";
// import UserContext from "../../contexts/UserContext";
import UserContext from "../../contexts/UserContext.js";

export default class Nav extends Component {
  static contextType = UserContext;

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
        console.log(`res.dbUser`, res.dbUser);
        console.log(
          `res.dbUser.pinballer_user_id`,
          res.dbUser.pinballer_user_id
        );
        // this.context.addpinballer_user_id(res.dbUser.pinballer_user_id);
        this.context.pinballer_user_id = res.dbUser.pinballer_user_id;
        console.log("this context", this.context);
        this.setState({
          user: res.dbUser
        });
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();

        // window.location = '/account';
        // window.location forces a reload to the destination
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  // state = { error: null };

  render() {
    console.log("UserContext", this.contextType);
    console.log(`user`, this.state.user);
    return (
      <div>
        <header role="banner">
          <h1>Log-in</h1>
          {/* <p>{ this.state.user.user_first_name}</p> */}
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
