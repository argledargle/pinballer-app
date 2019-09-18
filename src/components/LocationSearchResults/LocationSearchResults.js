import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context.js";
import config from "../../config";

export default class LocationSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      hasDataLoaded: false
    };
  }

  static contextType = Context;

  static defaultProps = {};

  state = { error: null, hasDataLoaded: false };

  // TODO: update this to reflect the selected item on the previous page
  async componentDidMount() {
    console.log(
      `calling ${config.API_ENDPOINT}/locations/machines/${this.context.destination_id}`
    );
    await fetch(
      `${config.API_ENDPOINT}/locations/machines/${this.context.destination_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(location => this.setState({ location }))
      .then(() => this.setState({ hasDataLoaded: true }));;
  }


  render() {
    const { error } = this.state;
    console.log(this.state.location)

    // function handleClick(e) {
    //     e.preventDefault()
    // }

    if (!this.state.hasDataLoaded) {
      return (
        <div>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <header role="banner">
            <h1>Loading</h1>
          </header>
        </div>
      );
    }


    return (
      <div>
        <main role="main">
          <header role="banner">
            <h1>
              Results for <em>location</em>
            </h1>
          </header>
          <section>
            <Link to="/location">Location</Link> : Address
          </section>
          <section>
            <form className="location-submission-form">
              <div>
                <label htmlFor="loation-search">
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

              <Link to="/locationresults">
                <button type="submit">Submit</button>
              </Link>
            </form>
          </section>
        </main>
      </div>
    );
  }
}
