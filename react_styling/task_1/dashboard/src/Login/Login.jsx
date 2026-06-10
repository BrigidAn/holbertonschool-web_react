import React from "react";
import WithLogging from "../HOC/WithLogging";

const Login = () => {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <form>
        <label>
          Email:
          <input id="email" name="email" type="email" />
        </label>

        <label>
          Password:
          <input id="password" name="password" type="password" />
        </label>

        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default WithLogging(Login);
