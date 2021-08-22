import React, { Component } from "react";
import { Redirect,Link } from "react-router-dom";

export default class Login extends Component {
  signIn() {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
        localStorage.setItem("email", JSON.stringify(response.user_id));
        localStorage.setItem("isActive", JSON.stringify(response.isActive));
      });
    });
  }

  render() {
    if (JSON.parse(localStorage.getItem("isActive"))) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <h3 className="text-center">Log In Form</h3>
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
          onClick={() => this.signIn()}
        >
          Sign In
        </button>
        <p>
          Don't have an account? {" "}
          <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    );
  }
}
