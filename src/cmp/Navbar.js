import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Navbar extends Component {
  logOut() {
    localStorage.setItem("email", JSON.stringify(""));
    localStorage.setItem("isActive", JSON.stringify(false));
  }
  render() {
    if (!JSON.parse(localStorage.getItem("isActive"))) {
      return <Redirect to="/login" />;
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">E-commerce App</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add_product">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-3" type="submit">
                Search
              </button>
              <button className="btn btn-primary" onClick={() => this.logOut()}>
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
