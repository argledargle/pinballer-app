import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import './App.css'
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <Switch>
        <Route exact path ={'/'}
        component = {LandingPage} />
        <Route
              exact
              path={'/login'}
              component={Login}
            />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
