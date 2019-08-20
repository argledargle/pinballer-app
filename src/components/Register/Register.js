import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault()  }
    return (
      <div>
        <header role="banner">
          <h1>Register</h1>
          <h2>Sign-up!</h2>
        </header>
        <section>
                    <form classfor='signup-form'>
            <div>
              <label htmlFor="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name='confirm-password' id='confirm-password' />
            </div>
            <button type='submit' onClick={handleClick}><Link to ="/account">Register</Link></button>
            </form>
        </section>
      </div>
    );
  }
}
