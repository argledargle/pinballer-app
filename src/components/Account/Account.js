import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context.js";

export default class LandingPage extends Component {
  static contextType = Context;
  static defaultProps ={
  }
  
  state = { error: null };

  componentDidMount() {
    // put logic here that uses context of user logged in to fetch data from
    // the `/users/:user_id api
  }

  render() {
    console.log("this context", this.context);
    const { error } = this.state;

    return (
      <div>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <header role="banner">
          <h1>Welcome</h1>
          <h2>
            [<i>Username</i>]
          </h2>
        </header>
        <section>
          <h3>Current high scores</h3>
          <br />
          <b>
            <Link to="/machine">Mars attacks!</Link>
          </b>{" "}
          : 30,120,460
          <br />
          <b>
            <Link to="/machine">Medieval Madness</Link>
          </b>{" "}
          : 16,527,380
          <br />
          <b>
            <Link to="/machine">Metallica</Link>
          </b>{" "}
          : 4,135,040
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
