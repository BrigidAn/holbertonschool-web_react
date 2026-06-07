import "./App.css";
import logo from "./assets/holberton-logo.jpg";
import Notifications from "./Notifications";
import { getCurrentYear, getFooterCopy } from "./utils";

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-header">
        <img
          src={logo}
          alt="holberton logo"
          className="App-logo"
        />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* NEW FORM ELEMENTS */}
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" />

          <button type="button">OK</button>
        </div>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;