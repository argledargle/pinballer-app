import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  handleLogoutClick = () => {};
  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        {/* <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link> */}
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        {/* <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link> */}
      </div>
    );
  }
  render() {
    return (
      <>
      <div>
        <nav className="Header">
          <h1>
            {/* <Link to="/">Pinballer</Link> */}
          </h1>
          <span className="Header__tagline--wide">Rate all the things.</span>
{/* I still need to implement the TokenService functionality below this note.
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
             */}
        </nav>
</div>
        <span className="Header__tagline--narrow">Rate all the things.</span>
      </>
    );
  }
}
