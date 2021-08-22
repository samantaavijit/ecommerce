import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Updateproduct from './Updateproduct'

export default class Dashboard extends Component {
  render() {
    if (!JSON.parse(localStorage.getItem("isActive"))) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/update/:id" component={Updateproduct} />
          </Switch>
        </Router>
      </div>
    );
  }
}
