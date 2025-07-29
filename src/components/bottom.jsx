import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/bottom.css"; // Importing the CSS file

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom-links">
        <Nav.Link href="/" className="bottom-link">
          Home
        </Nav.Link>
        <Nav.Link href="/aboutUs" className="bottom-link">
          About
        </Nav.Link>
        <Nav.Link href="/contact" className="bottom-link">
          Contact
        </Nav.Link>
      </div>

      <div className="bottom-about">
        <div className="bottom-about-title">Why do hire me?</div>
        <div className="bottom-about-text">
          I have Knowledge of HTML, CSS, React, Java , Spring-boot and SQL. I am
          a quick learner and can adapt to new technologies easily. I am
          passionate about web development and always strive to improve my
          skills.
        </div>
      </div>
    </div>
  );
}

export default Bottom;
