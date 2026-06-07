import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <form>
        <label>
          Email:
          <input type="email" />
        </label>

        <label>
          Password:
          <input type="password" />
        </label>

        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default Login;