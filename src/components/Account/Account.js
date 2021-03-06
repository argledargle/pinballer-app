import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context.js";
// import AccountServices from "./account-services"
import config from "../../config";
import "./account.css";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      hasDataLoaded: false
    };
  }

  static contextType = Context;

  static defaultProps = {};

  state = { error: null, hasDataLoaded: false };

  //TODO: create a hasDataLoaded: false state and then update it when the data
  //has loaded from the API. This will probably be able to be repeated through
  //the rest of the app for our API calls

  async componentDidMount() {
    console.log("pinballer_user_id", this.context.pinballer_user_id);
    this.setState({
      user_nick_name: window.sessionStorage.getItem("user_nick_name"),
      admin_access: window.sessionStorage.getItem("admin_access"),
      user_first_name: window.sessionStorage.getItem("user_first_name"),
      user_last_name: window.sessionStorage.getItem("user_last_name"),
      pinballer_user_id: window.sessionStorage.getItem("pinballer_user_id")
    });
    console.log("user ID for API call", this.context.pinballer_user_id);
    await fetch(
      `${config.API_ENDPOINT}/scores/user/${this.context.pinballer_user_id}`
    )
      .then(res => res.json())
      .then(accountScores => this.setState({ accountScores }))
      .then(() => this.setState({ hasDataLoaded: true }));
  }

  render() {
    console.log("this.state", this.state);
    console.log("this context", this.context);
    const { error } = this.state;

    console.log("this.state.hasDataLoaded", this.state.hasDataLoaded);

    if (!this.state.hasDataLoaded) {
      return (
        <div>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <header role="banner">
            <h1>Loading</h1>
          </header>
        </div>
      );
    }

    if (this.state.accountScores === undefined) {
      return (
        <div>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <header role="banner">
            <h1>Welcome</h1>
            <h2>
              <i>{this.state.user_nick_name}</i>
            </h2>
          </header>
          <section>
            <h3>You have no scores yet.</h3>
          </section>
        </div>
      );
    }

    return (
      <div>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <header role="banner">
          <h1>Welcome</h1>
          <h2>
            <i>{this.state.user_nick_name}</i>
          </h2>
        </header>
        <section>
          <h3>Current scores</h3>
          <br />
          {/* mapping results from the API call above */}
          {this.state.accountScores.map((scores, i) => {
            return (
              <li key={i} className="machine">
                <p>
                  <b>
                    <Link to='/machine/'>{scores.machine_name}</Link>
                  </b>{" "}
                  : {scores.score_value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>
              </li>
            );
          })}
          {/* done mapping results from api key above */}
        </section>

        {/*

        Admin section deemed out of scope for current release
        
        I need to implement logic that only
        loads the below section if there's
        an admin logged in
        <section>
          <h3>Management</h3>
          <br />
          <p>
            This content will only be available after an 'admin' user has logged
            in.
          </p>
        </section>
        <section>
          <form className="machine-search-form">
            <div>
              <label htmlFor="machine search">
                Which machine do you want to change?
              </label>
              <input type="text" name="machine-search" id="machine-search" />
            </div>
            <Link to="/machineedit">
              <button type="submit">Search</button>
            </Link>
          </form>
        </section>
        <section>
          <form className="location-search-form">
            <div>
              <label htmlFor="location search">
                Which location do you want to change?
              </label>
              <input type="text" name="location-search" id="location-search" />
            </div>
            <Link to="/locationedit">
              <button type="submit">Search</button>
            </Link>
          </form>
         </section> */}
      </div>
    );
  }
}
