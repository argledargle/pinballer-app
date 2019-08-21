import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    // function handleClick(e) {
    //   e.preventDefault();
    // }
    return (
      <div>
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
        {/* I need to implement logic that only
        loads the below section if there's
        an admin logged in */}
        <section>
          <h3>Management</h3>
          <br />
          <p>
            This content will only be available after an 'admin' user has logged
            in.
          </p>
        </section>
        <section>
          <form class="machine-search-form">
            <div>
              <label for="machine search">
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
          <form class="location-search-form">
            <div>
              <label for="location search">
                Which location do you want to change?
              </label>
              <input type="text" name="location-search" id="location-search" />
            </div>
            <Link to="/locationedit">
              <button type="submit">Search</button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}