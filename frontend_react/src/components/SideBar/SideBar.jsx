import React from "react";
import { images } from "../../constants";

import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="app__sidebar">
      <div className="app__sidebar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
