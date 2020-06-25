import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
