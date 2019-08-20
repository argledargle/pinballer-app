import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LocationSearchResults extends Component {
  render() {
    // function handleClick(e) {
    //     e.preventDefault()
    // }
    return (
      <div>
        <main role="main">
          <header role="banner">
            <h1>
              Results for <em>location</em>
            </h1>
          </header>
          <section><Link to ="/location">Location</Link> : Address</section>
          <section>
            <form class="location-submission-form">
              <div>
                <label for="loation-search">
                  Wrong location?
                  <br />
                  Add it to our database below.
                </label>
                <br />
                Location Name:{" "}
                <input
                  type="text"
                  name="location-submission-name"
                  id="location-submission-name"
                />
                <br />
                Address:{" "}
                <input
                  type="text"
                  name="location-submission-address"
                  id="location-submission-address"
                />
              </div>

              <Link to="/machine"><button type="submit">Submit</button></Link>
            </form>
          </section>
        </main>
      </div>
    );
  }
}
