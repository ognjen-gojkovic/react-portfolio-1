import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

// components
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimoials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

function App() {
  const [toggleHamburger, setToggleHamburger] = React.useState(false);

  const handleToggleHamburger = () => {
    setToggleHamburger(!toggleHamburger);
  };

  return (
    <div className="app">
      <Topbar
        handleToggleHamburger={handleToggleHamburger}
        toggleHam={toggleHamburger}
      />
      <Menu
        toggleHam={toggleHamburger}
        handleToggleHamburger={handleToggleHamburger}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimoials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
