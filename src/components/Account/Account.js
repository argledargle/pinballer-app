import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
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
          <b>Mars attacks!</b> : 30,120,460
          <br />
          <b>Medieval Madness</b> : 16,527,380
          <br />
          <b>Metallica</b> : 4,135,040
        </section>
        {/* I need to implement logic that only
        loads the below section if there's
        an admin logged in */}
        <section>
          <h3>Management</h3>
        </section>
        <section>
          <form class="machine-search-form">
            <div>
              <label for="machine search">
                Which machine do you want to change?
              </label>
              <input type="text" name="machine-search" id="machine-search" />
            </div>
            <button type="submit">Search</button>
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
            <button type="submit">Search</button>
          </form>
        </section>
      </div>
    );
  }
}
