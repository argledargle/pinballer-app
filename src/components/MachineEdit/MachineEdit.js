import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
    }
    return (
      <main role="main">
        <header role="banner">
          <h1>
            <em>Machine</em>
          </h1>
        </header>

        <section>
          <form class="edit-score-form">
            <div>
              <label for="edit-score-form">Who's high score should we change?</label>
              <br />
              <select>
                <option value="User-1">User 1</option>
                <option value="User-2">User 2</option>
                <option value="User-3">User 3</option>
                <option value="User-4">User 4</option>
              </select>
              <input type="number" name="score-change" id="score-change" />
            </div>
            <button type="submit" onClick={handleClick}>
              Update score
            </button>
          </form>
        </section>
        <section>
          <form className="machine-name-update-form">
            <div>
              <label htmlFor="machine-name-update-form">
                Is the machine named wrong?
              </label>
              <br />
              Correct machine name:{" "}
              <input
                type="text"
                name="machine-update-name"
                id="machine-update-name"
              />
            </div>
            <Link to="/machine">
              <button type="submit">Submit</button>
            </Link>
          </form>
        </section>
      </main>
    );
  }
}
