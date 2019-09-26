import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>Pinballer</h1>
          <h2>A place to play</h2>
        </header>

        <section>
          <h3>Compete with friends</h3>
          <p>
            Pinballer is a place for you to compete with friends from all over
            the world on different machines in different locations. It doesn't
            matter where you are.
            <br /> Sign-up, log-in and start playing.
          </p>
        </section>

        <section>
          <h3>Anywhere, any time</h3>
          <p>
            Current pinball machines are limited to local scores only, we're
            making it possible to see how you compare on a larger scale.
          </p>
        </section>
        <section>
          <h3>Current high scores</h3>
          <h4>Argledargle</h4>
          <b>Mars attacks!</b> : 30,120,460
          <h4>Matty bombatty</h4>
          <b>Medieval Madness</b> : 16,527,380
          <h4>La Nina</h4>
          <b>Metallica</b> : 4,135,040
        </section>
      </div>
    );
  }
}
