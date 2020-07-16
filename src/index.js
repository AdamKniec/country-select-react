import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
// import { Route } from "react-router";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <React.StrictMode>
      <Route path="/" component={App} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
