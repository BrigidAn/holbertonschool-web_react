import React from "react";
import "./Header.css";
import holbertonlogo from "../assets/holberton-logo.jpg"

const Header = () => {
  return (
    <header className="App-header">
      <img 
      src={holbertonlogo}
      alt="holberton logo" 
      className="App-logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

export default Header;