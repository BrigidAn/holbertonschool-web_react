import React from "react";
import holbertonlogo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <header className="App-header flex items-center">
      <img src={holbertonlogo} alt="holberton logo" className="App-logo h-16" />

      <h1
        className="text-3xl font-bold"
        style={{
          color: "var(--main-color)",
        }}
      >
        School dashboard
      </h1>
    </header>
  );
}

export default Header;
