import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    // function handleClick(e) {
    //   e.preventDefault()  }
    return (
      <div>
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
