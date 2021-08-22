import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./cmp/Login";
import Dashboard from "./cmp/Dashboard";
import Registration from "./cmp/Registration";
import Addproduct from "./cmp/Addproduct";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <Route path="/add_product" component={Addproduct} />
          </Switch>
        </Router>
      </div>
    );
  }
}
