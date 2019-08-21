import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Account from "./components/Account/Account";
import LocationSearchResults from "./components/LocationSearchResults/LocationSearchResults";
import Location from "./components/Location/Location";
import Machine from "./components/Machine/Machine";
import Search from "./components/Search/Search";
import MachineEdit from "./components/MachineEdit/MachineEdit";
import LocationEdit from "./components/LocationEdit/LocationEdit";

import ScrollToTop from "./components/Helpers/ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <main className="App">
            <Nav />
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path={"/register"} component={Register} />
              <Route exact path={"/account"} component={Account} />
              <Route
                exact
                path={"/locationresults"}
                component={LocationSearchResults}
              />
              <Route exact path={"/Location"} component={Location} />
              <Route exact path={"/machine"} component={Machine} />
              <Route exact path={"/search"} component={Search} />
              <Route exact path={"/machineedit"} component={MachineEdit} />
              <Route exact path={"/locationedit"} component={LocationEdit} />
            </Switch>
            <Footer />
          </main>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
