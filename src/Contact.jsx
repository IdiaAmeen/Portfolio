import React, { Component } from "react";
import "./Contact.css";
export default class Contact extends Component {
  render() {
    if (this.props.display === true) {
      return (
        <>
          <div className="outer-modal">
            <div className="inner-modal">
              <button onClick={this.props.handleClick}>X</button>
              <h3> Contact Me!</h3>
              <div className="contacts">
                <div className="email">
                  <img src={require("./images/email.png")} id="contact-icon" />
                  <p>IAmeen95@gmail.com</p>
                </div>
                <div className="cell">
                  <img src={require("./images/cell.png")} id="contact-icon" />
                  <p>+ 1 (347)869-6712</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
