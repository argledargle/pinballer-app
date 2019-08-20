import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Location extends Component {
  render() {
    function handleClick(e) {
        e.preventDefault()    }
    return (
      <div>
        <main role="main">
          <header role="banner">
            <h1>
              <em>Location</em>
            </h1>
            <h2>Address</h2>
          </header>
          <section>
            <b>
              <Link to="/machine"> Machine 1</Link>
            </b>{" "}
            <br />
            Player 1 : Score <br />
            Player 2 : Score <br />
            Player 3 : Score <br />
          </section>
          <section>
            <b>Machine 2</b> <br />
            Player 1 : Score <br />
            Player 2 : Score <br />
            Player 3 : Score <br />
          </section>
          <section>
            <b>Machine 3</b> <br />
            Player 1 : Score <br />
            Player 2 : Score <br />
            Player 3 : Score <br />
          </section>
          <section>
            <form className="location-submission-form">
              <div>
                <label htmlFor="loation-search">
                  Do we need to add a different machine?
                  <br />
                  Update our database below.
                </label>
                <br />
                Name:{" "}
                <input
                  type="text"
                  name="machine-submission-name"
                  id="machine-submission-name"
                />
                <br />
              </div>

              <button type="submit" onClick = {handleClick}>Submit</button>
            </form>
          </section>
        </main>
      </div>
    );
  }
}
