import React, { Component } from "react";

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
      </main>
    );
  }
}
