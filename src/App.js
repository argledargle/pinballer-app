import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import Account from "./components/Account/Account"
import LocationSearchResults from "./components/LocationSearchResults/LocationSearchResults"
import Location from "./components/Location/Location"

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/account"} component={Account} />
          <Route exact path={"/locationresults"} component={LocationSearchResults} />
          <Route exact path={"/Location"} component={Location}/>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
