import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Context from "../../contexts/Context.js";
import config from "../../config";

export default class MachineScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      hasDataLoaded: false,
      scores: null
    };
  }

  static contextType = Context;

  static defaultProps = {};

  state = { error: null, hasDataLoaded: false };

  async componentDidMount() {
    // console.log("props.machine_id", this.props.machine_id);
    // console.log(
    //   `${config.API_ENDPOINT}/scores/machine/${this.props.machine_id}`
    // );
    await fetch(
      `${config.API_ENDPOINT}/scores/machine/${this.props.machine_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(scores => this.setState({ scores }))
      //   .then(console.log("this.state.scores", this.state.scores))
      .then(() => this.setState({ hasDataLoaded: true }));
  }

  render() {
    // console.log("this.state.scores", this.state.scores);
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
        {this.state.scores.map(score => {
          return (
            <span key={score.score_id}>
              {" "}
              <br />
              <span className="user_nick">{score.user_nick_name}</span> :{" "}
              <span className="user_score">
                {score.score_value.toLocaleString(navigator.language, {
                  minimumFractionDigits: 0
                })}
              </span>{" "}
            </span>
          );
        })}
      </div>
    );
  }
}
