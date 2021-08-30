import React from "react";
import { Link } from "react-router-dom";
import { Person, Mail } from "@material-ui/icons";
import "./Topbar.scss";

const Topbar = ({ handleToggleHamburger, toggleHam }) => {
  return (
    <div className={toggleHam ? "topbar active" : "topbar"} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genious.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+385 111-33-33</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>person@genius.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={handleToggleHamburger}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
