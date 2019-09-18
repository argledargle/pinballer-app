import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context.js";
import config from "../../config";

export default class Location extends Component {
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
      .then(() => this.setState({ hasDataLoaded: true }));

    // console.log(
    //   `mapping the call ${config.API_ENDPOINT}/scores/machines/machine.machine_name`
    // );

    // below this line, I map an API call to get data for mulitple machines

    //     this.state.location.map(machine => {
    //       fetch(`${config.API_ENDPOINT}/scores/machines/${machine.machine_name}`, {
    //         method: "GET",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json"
    //         }
    //       })
    //         .then(res => res.json())
    //         .then(machine => this.setState({ machine }))
    //         .then(console.log(machine));
    //       return machine;
    //     });
  }

  render() {
    console.log(this.context.destination_name)
    console.log(this.context.destination_address)
    const { error } = this.state;
    console.log("this.state.location", this.state.location);

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
              {this.context.destination_name}
            </h1>
            {this.context.destination_address}
          </header>
          {this.state.location.map(machine => {
            console.log("machine_id", machine.machine_id)
            console.log('API with trouble', `${config.API_ENDPOINT}/scores/machine/${machine.machine_id}`)
            fetch(
              `${config.API_ENDPOINT}/scores/machine/${machine.machine_id}`,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }
            )
              .then(res => res.json())
              .then(console.log("machine", machine));

            return (
              <section>
                <b key={machine.machine_id}>{machine.machine_name}</b>{" "}
              </section>
            );
          })}
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
