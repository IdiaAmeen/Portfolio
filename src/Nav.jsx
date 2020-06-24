import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/" id="navbar">
        Home
      </Link>
      <Link to="/aboutidi" id="navbar">
        About Me
      </Link>
    </div>
  );
}
