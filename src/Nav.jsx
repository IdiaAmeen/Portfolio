import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// import Contact from "./Contact";
class Nav extends Component {
  state = {
    display: false,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      display: !prevState.display,
    }));
  };
  render() {
    return (
      <div className="nav">
        <Link to="/" id="navbar">
          Home
        </Link>
        <Link to="/aboutidi" id="navbar">
          About Me
        </Link>
        <a href="https://docdro.id/Mf6zXED" id="navbar">
          Resume
        </a>
        <a href="mailto:iAmeen95@gmail.com" id="navbar">
          Contact
        </a>
        {/* <button onClick={this.handleClick} id="contact-button">
          Contact
        </button>
        {this.state.display && (
          <Contact
            display={this.state.display}
            handleClick={this.handleClick}
          />
        )} */}
      </div>
    );
  }
}
export default Nav;
