import React, { useState } from "react";
import Registration from "./Registration";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

export const MyLogin = () => {
  console.log(props.match.params.id)
  const myStyle = {
    width: "450px",
    margin: "80px auto",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((result) => {
      result.json().then((response) => {
        localStorage.setItem("email", JSON.stringify(response.user_id));
        if (response.status === 200) {
          console.log(response.message);
        }
      });
    });
  }

  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center">Login Form</h3>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={login}>
        Sign In
      </button>
      <p>
        Don't have an account?{" "}
        <Router>
          <Link to="/register">Sign Up</Link>
          {/*      <Switch>
            <Route path="/register">
              <Registration />
            </Route>
          </Switch> */}
        </Router>
      </p>

    </div>
  );
};
