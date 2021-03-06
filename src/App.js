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
import Context from "./contexts/Context";
import ScrollToTop from "./components/Helpers/ScrollToTop";

class App extends Component {
  static contextType = Context;

  render() {
    const contextValue = {
      pinballer_user_id: window.sessionStorage.getItem("pinballer_user_id") || null,
      user_nick_name: window.sessionStorage.getItem("user_nick_name") || null,
      user_first_name: window.sessionStorage.getItem("user_first_name") || null,
      // user_last_name: null,
      // user_email: null,
      admin_access: window.sessionStorage.getItem("admin_access") || false,
      destination_id: window.sessionStorage.getItem("destination_id") || false,
      destination_address: window.sessionStorage.getItem("destination_address") || false,
      destination_name: window.sessionStorage.getItem("destination_name") || false,
    };

    console.log("contextValue", contextValue);
    return (
      <Router>
        <ScrollToTop>
          <main className="App">
            <Nav />
            <Switch>
              <Context.Provider value={contextValue}>
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
              </Context.Provider>
            </Switch>
            <Footer />
          </main>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
