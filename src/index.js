import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./contexts/Context";

ReactDOM.render(
  <BrowserRouter>
    <Context.Provider>
      <App />
    </Context.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
