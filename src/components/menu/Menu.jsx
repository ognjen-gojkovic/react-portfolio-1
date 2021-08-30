import React from "react";
import "./Menu.scss";

const Menu = ({ toggleHam, handleToggleHamburger }) => {
  return (
    <div className={toggleHam ? "menu active" : "menu"}>
      <ul>
        <li onClick={handleToggleHamburger}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleToggleHamburger}>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li onClick={handleToggleHamburger}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleToggleHamburger}>
          <a href="#testimonials">Testimonilas</a>
        </li>
        <li onClick={handleToggleHamburger}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
