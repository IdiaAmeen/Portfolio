import React from "react";
import Projects from "./Projects.json";
import { Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <img
        src={require("./images/IdiProfPic.JPG")}
        alt="Idia Ameen"
        id="profile"
      />
      <Route exact path="/">
        <p id="greeting">
          Thanks for visiting my portfolio. Here are some projects I've worked
          on!{" "}
        </p>
        <div className="projectcard">
          {Projects.map((project) => (
            <div className="projects" key={project.title}>
              <a href={project.link} id="projects">
                <img src={project.gif} alt={project.title} id="gif" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </Route>
      <Route exact path="/aboutidi">
        <AboutMe />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
