import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    function handleClick(e) {
        e.preventDefault()
    }
    return (
      <div>
        <main role="main">
          <header role="banner">
            <h1>Are you looking for a machine or a location?</h1>
            <h2>Search for both below</h2>
          </header>
          <section>
            <form className="location-search-form">
              <div>
                <label htmlFor="loation-search">
                  Which location are you looking for?
                </label>
                <br />
                <input
                  type="text"
                  name="location-search"
                  id="location-search"
                />
                <button type="submit" onClick = {handleClick}><Link to="/Location">Search</Link></button>
              </div>
            </form>
          </section>
          <section>
            <form className="machine-search-form">
              <div>
                <label htmlFor="machine-search">
                  Which pinball machine are you looking for?
                </label>
                <br />
                <input type="text" name="machine-search" id="machine-search" />
                <button type="submit" onClick={handleClick}><Link to="/machine">Search</Link></button>
              </div>
            </form>
          </section>
          <section>
            <form className="location-submission-form">
              <div>
                <label htmlFor="loation-search">
                  Can't find the location that you're searching for?
                  <br />
                  Submit the location below.
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

              <button type="submit" onClick={handleClick}>Submit</button>
            </form>
          </section>
        </main>
      </div>
    );
  }
}
