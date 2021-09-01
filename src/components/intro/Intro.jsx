import React from "react";
import Typewriter from "typewriter-effect";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there. I'm</h2>
          <h1>Ognjen Gojković</h1>
          <h3>
            Freelance{" "}
            <span>
              <Typewriter
                options={{
                  strings: ["Developer", "Programmer", "Designer"],
                  loop: true,
                  autoStart: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
