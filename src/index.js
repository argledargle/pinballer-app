import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./contexts/UserContext";

ReactDOM.render(
  <BrowserRouter>
    <UserContext.Provider>
      <App />
    </UserContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
