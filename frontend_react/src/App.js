import React from "react";

import { AppWrap, MotionWrap } from "./wrapper";
import {
  About,
  FixedComponents,
  Footer,
  Header,
  Skills,
  Work,
} from "./container";
import { Navbar, SideBar } from "./components";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default AppWrap(App, "app__app");
