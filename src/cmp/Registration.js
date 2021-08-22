import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  signUp() {
    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Sign Up Form</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.signUp()}
        >
          Create Account
        </button>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    );
  }
}
