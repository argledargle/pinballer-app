import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-services";

export default class Register extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    const {
      nickname,
      user_password,
      user_first_name,
      user_last_name,
      user_email
    } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_nick_name: nickname.value,
      user_password: user_password.value,
      user_first_name: user_first_name.value,
      user_last_name: user_last_name.value,
      user_email: user_email.value
    })
      .then(user => {
        nickname.value = "";
        user_first_name.value = "";
        user_last_name.value = "";
        user_password.value = "";
        user_email.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <div>
        <header role="banner">
          <h1>Register</h1>
          <h2>Sign-up!</h2>
        </header>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <section>
          <form onSubmit={this.handleSubmitJwtAuth} classfor="signup-form">
            <div>
              <label htmlFor="first-name" className="hide-element">First name</label>
              {/* <br /> */}
              <input
                required
                value={this.state.user_first_name}
                placeholder="First Name"
                type="text"
                name="user_first_name"
                id="user_first_name"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="hide-element">Last name</label>
              {/* <br /> */}
              <input
                required
                value={this.state.user_last_name}
                type="text"
                name="user_last_name"
                id="user_last_name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="nickname" className="hide-element">Nickname</label>
              {/* <br /> */}
              <input
                required
                value={this.state.nickname}
                type="text"
                name="nickname"
                id="nickname"
                placeholder="Nickname"
              />
            </div>
            <div>
              <label htmlFor="email" className="hide-element">Email</label>
              {/* <br /> */}
              <input
                required
                value={this.state.user_email}
                type="text"
                name="user_email"
                id="user_email"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="user_password" className="hide-element">Password</label>
              {/* <br /> */}
              <input
                required
                value={this.state.user_password}
                type="password"
                name="user_password"
                id="user_password"
                placeholder="Password"
              />
            </div>
            {/* <div>
              <label htmlFor="user_password">Confirm password</label>
              <input
                required
                type="password"
                name="confirm_user_password"
                id="confirm_user_password"
              />
            </div> */}
            {/* <Link to="/account"> */}
            <button type="submit">Register</button>
            {/* </Link> */}
          </form>
        </section>
      </div>
    );
  }
}
