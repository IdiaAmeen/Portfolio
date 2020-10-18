import React, { Component } from "react";
import "./Footer.css";
// import Contact from "./Contact";
class Footer extends Component {
  // state = {
  //   display: false,
  // };
  // handleClick = () => {
  //   this.setState((prevState) => ({
  //     display: !prevState.display,
  //   }));
  // };
  render() {
    return (
      <div className="links">
        <a href="https://www.linkedin.com/in/idiaameen/">
          <img
            src={require("./images/LinkedIn.png")}
            id="links"
            alt="https://www.linkedin.com/in/idiaameen/"
          />
        </a>
        <a href="https://github.com/IdiaAmeen">
          <img
            src={require("./images/GitHub.png")}
            id="links"
            alt="https://github.com/IdiaAmeen"
          />
        </a>
        {/* <button onClick={this.handleClick}>
          <img src={require("./images/Contact.png")} alt="contact" id="links" />
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
export default Footer;
