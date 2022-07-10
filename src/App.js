import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import BootstrapNav from "./components/BootstrapNav"
import Contact from "./pages/Contact"
import {Skills} from "./pages/Skills"



function App() {

  return (
    <BrowserRouter>
      <BootstrapNav />
      <Switch>
        <Route exact path="/">
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
      </Switch>


    </BrowserRouter>

  );
}

export default App;
