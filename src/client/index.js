import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Test = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/test" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(<Test />, document.getElementById("root"));
