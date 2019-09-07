import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-services";

export default class Register extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    const { nickname, password, first_name, last_name, email } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      nickname: nickname.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value
    })
      .then(user => {
        nickname.value = "";
        first_name.value = "";
        last_name.value = "";
        password.value = "";
        email.value = "";
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
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <header role="banner">
          <h1>Register</h1>
          <h2>Sign-up!</h2>
        </header>
        <section>
          <form classfor="signup-form">
            <div>
              <label htmlFor="first-name">First name</label>
              <input
                placeholder="First Name"
                type="text"
                name="first-name"
                id="first-name"
              />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="nickname">Nickname</label>
              <input type="text" name="nickname" id="nickname" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
              />
            </div>
            <Link to="/account">
              <button type="submit">Register</button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}
