import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
          nunc eu purus rutrum sollicitudin. Quisque odio metus, sodales quis
          mattis nec, luctus vitae quam. Duis libero magna, malesuada ut ipsum
          at, dignissim consectetur mauris. Phasellus lorem elit, molestie ut
          accumsan ut, pretium eu tellus. Duis quis tincidunt augue. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Sed luctus rhoncus ligula vel gravida.
        </p>
      </div>
    </div>
  );
}

export default About;
