import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Nav extends Component {
  render() {
    // function handleClick(e) {
    //   e.preventDefault();
    // }
    return (
      <div>
        <header role="banner">
          <h1>Log-in</h1>
          <h2>Enter your email and password</h2>
        </header>
        <section>
          <form class="signin-form">
            <div>
              <label for="username">Email</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <Link to="/account">
              <button type="submit">
                Sign In
              </button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}
