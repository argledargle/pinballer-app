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
            <em>Location</em>
          </h1>
        </header>

        <section>
          <form class="edit-location-machine-form">
            <div>
              <label for="edit-location-machine-form">
                Is there a machine listed that shouldn't be?
              </label>
              <br />
              <select>
                <option value="Machine-1">Machine 1</option>
                <option value="Machine-2">Machine 2</option>
                <option value="Machine-3">Machine 3</option>
                <option value="Machine-4">Machine 4</option>
                <option value="Machine-5">Machine 5</option>
              </select>
            </div>
            <button type="submit" onClick={handleClick}>
              Remove machine
            </button>
          </form>
        </section>
        <section>
          <form className="location-name-update-form">
            <div>
              <label htmlFor="location-name-update-form">
                Is the location named wrong?
              </label>
              <br />
              Correct location name:{" "}
              <input
                type="text"
                name="location-update-name"
                id="location-update-name"
              />
            </div>
            <Link to="/location">
              <button type="submit">Submit</button>
            </Link>
          </form>
        </section>
        <section>
          <form className="location-address-update-form">
            <div>
              <label htmlFor="location-address-update-form">
                Does the location have the wrong address?
              </label>
              <br />
              Correct address:{" "}
              <input
                type="text"
                name="location-update-address"
                id="location-update-address"
              />
            </div>
            <Link to="/location">
              <button type="submit">Submit</button>
            </Link>
          </form>
        </section>
        <section>
          <form className="location-delete">
            <div>
              <label htmlFor="location-delete">
                Does the location not exist any longer?
              </label>
              <br />
            </div>
            <Link to="/">
              <button type="submit">Delete</button>
            </Link>
          </form>
        </section>
      </main>
    );
  }
}