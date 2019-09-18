import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context.js";
import config from "../../config";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      hasDataLoaded: false,
      locations: null
    };
    this.select = this.select.bind(this);
  }

  static contextType = Context;

  static defaultProps = {};

  state = { error: null, hasDataLoaded: false };

  select(e) {
    console.log(e.target.value);
    this.context.destination_id = e.target.value;
    window.sessionStorage.setItem("destination_id", e.target.value);
    var destination = this.state.locations.find(
      item => item.location_id == e.target.value
    );
    this.context.destination_name = destination.location_name;
    window.sessionStorage.setItem(
      "destination_name",
      destination.location_name
    );
    this.context.destination_address = destination.location_address;
    window.sessionStorage.setItem(
      "destination_address",
      destination.location_address
    );
    console.log(this.context.destination_address);
    console.log(this.context.destination_name);
    console.log(destination);
    // window.sessionStorage.setItem("destination_address", e.target.locationaddress)
    // window.sessionStorage.setItem("destination_name", e.target.locationname)
    // console.log(window.sessionStorage.getItem("destination_name"))
  }

  async componentDidMount() {
    console.log(`calling ${config.API_ENDPOINT}/locations`);
    await fetch(`${config.API_ENDPOINT}/locations`)
      .then(res => res.json())
      .then(locations => this.setState({ locations }))
      .then(() => this.setState({ hasDataLoaded: true }));
  }
  //TODO: finish this post location function
  postLocation() {
    console.log(`posting ${config.API_ENDPOINT}/locations`);
    fetch(`${config.API_ENDPOINT}/locations`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        location_name: "something",
        location_address: "something else"
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
    //TODO: implement this.props.history.push("/locations/:location_id") functionality
  }

  render() {
    console.log(this.state.locations);
    const { error } = this.state;
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
            <h1>Are you looking for a machine or a location?</h1>
            <h2>Search or submit below</h2>
          </header>
          <section>
            <form className="location-search-form">
              <div>
                <label htmlFor="loation-search">
                  Which location are you looking for?
                </label>
                <br />
                {/* mapping function goes below here */}
                <select defaultValue="no-value" onChange={this.select}>
                  <option value="no-value" disabled>
                    Select a location
                  </option>
                  {this.state.locations.map(location => {
                    return (
                      <option
                        key={location.location_id}
                        value={location.location_id}
                        className="location"
                      >
                        {location.location_name}
                      </option>
                    );
                  })}
                </select>
                <br />
                {/* mapping function goes above here */}
                <Link
                  to={{
                    pathname: "/location",
                    state: { machine_location: this.state.destination_id }
                  }}
                >
                  <button type="submit">Go</button>
                </Link>
              </div>
            </form>
          </section>
          {/* Moved to be out of scope, to be implemented at later date.
          <section>
            <form className="machine-search-form">
              <div>
                <label htmlFor="machine-search">
                  Which pinball machine are you looking for?
                </label>
                <br />
                <input type="text" name="machine-search" id="machine-search" />
                <br />
                <Link to="/machine">
                  <button type="submit">Search</button>
                </Link>
              </div>
            </form>
          </section> */}
          <section>
            <form className="location-submission-form">
              <div>
                <label htmlFor="loation-search">
                  Can't find the location that you're searching for?
                  <br />
                  Submit the location below.
                </label>
                <br />
                Location Name: <br />
                <input
                  type="text"
                  name="location-submission-name"
                  id="location-submission-name"
                />
                <br />
                Address: <br />
                <input
                  type="text"
                  name="location-submission-address"
                  id="location-submission-address"
                />
              </div>

              <Link to="/machine">
                <button type="submit">Submit</button>
              </Link>
            </form>
          </section>
        </main>
      </div>
    );
  }
}
