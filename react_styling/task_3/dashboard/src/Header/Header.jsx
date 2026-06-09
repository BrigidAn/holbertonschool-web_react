import React from "react";
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <header className="flex items-center gap-4 p-4 border-b">
      <img
        src={logo}
        alt="holberton logo"
        className="h-16"
      />

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