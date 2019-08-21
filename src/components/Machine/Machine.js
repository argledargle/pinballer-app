import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Machine extends Component {
  render() {
        function handleClick(e) {
            e.preventDefault()        }


    return (
      <main role="main">
        <header role="banner">
          <h1>
            <em>Machine</em>
          </h1>
        </header>

        <section>
          <form class="score-submission-form">
            <div>
              <label for="loation-search">Want to enter a new score?</label>
              <br />
              <input
                type="number"
                name="score-submission"
                id="score-submission"
              />
            </div>

            <button type="submit" onClick={handleClick}>Submit</button>
          </form>
        </section>

        <section>Your score : Score</section>

        <section>Player 1 : Score</section>

        <section>Player 2 : Score</section>

        <section>Player 3 : Score</section>

        <section>
            <form className="machine-submission-form">
              <div>
                <label htmlFor="machine-submission-form">
                  Can't find the location that you're searching for?
                  <br />
                  Submit the location below.
                </label>
                <br />
                Machine Name:{" "}
                <input
                  type="text"
                  name="machine-submission-name"
                  id="machine-submission-name"
                />
                <br />
                Location Name:{" "}
                <input
                  type="text"
                  name="machine-submission-address"
                  id="machine-submission-address"
                />
              </div>

              <Link to="/machine"><button type="submit">Submit</button></Link>
            </form>
          </section> 
      </main>
    );
  }
}
