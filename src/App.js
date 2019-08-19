import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <LandingPage />
      </main>
    );
  }
}

export default App;
