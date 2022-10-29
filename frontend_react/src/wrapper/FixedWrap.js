import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const FixedWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      // <div id={idName} className={`app__container ${classNames}`}>
      <div>
        <SocialMedia />
        <NavigationDots active={idName} />

        <Component />
      </div>
      // </div>
    );
  };

export default FixedWrap;
