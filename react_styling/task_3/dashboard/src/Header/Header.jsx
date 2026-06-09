import React from "react";
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <header className="flex items-center gap-4 border-b p-4">
      <img src={logo} alt="holberton logo" className="h-12 w-auto" />

      <h1
        className="text-2xl font-bold"
        style={{ color: "var(--main-color)" }}
      >
        School dashboard
      </h1>
    </header>
  );
}

export default Header;