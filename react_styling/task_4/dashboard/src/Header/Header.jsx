import React from "react";
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <header className="App-header flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4            ">
      <img
        src={logo}
        alt="logo"
        className="h-16"
      />

      <h1
        className="text-lg sm:text-2xl md:text-3xl font-bold"
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