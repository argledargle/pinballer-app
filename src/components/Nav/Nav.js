import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import "./Nav.css";

export default class Nav extends Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    // window.location.reload();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <span id="left">
          <Link to="/">Pinballer</Link>
        </span>
        {" "}
        <span id="right">
          <Link to="/" onClick={this.handleLogoutClick}>
            Logout
          </Link>
          {" "}
          <Link to="/search">Search</Link>
        </span>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <span id="left">
          <Link to="/">Pinballer</Link>
        </span>
        {" "}
        <span id="right">
          <Link to="/login">Log in</Link>
          {" "}
          <Link to="/register">Register</Link>
        </span>
      </div>
    );
  }

  render() {
    return (
      <>
        <div>
          <nav className="Nav__Header">
            <h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
           </h1>
          </nav>
        </div>
      </>
    );
  }
}
