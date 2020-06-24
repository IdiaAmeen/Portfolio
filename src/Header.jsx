import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <img
        src={require("./images/MyNameWhite.png")}
        alt="Hi, I'm Idia Ameen"
        id="name"
      />
    </div>
  );
}
