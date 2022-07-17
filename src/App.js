import React from "react";
import './App.css';
import BootstrapNavbar from "./components/BootstrapNavbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About";
import {Skills} from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
      <BrowserRouter>
          <BootstrapNavbar />
      <Switch>
          <Route exact path='/'>
              <Home />
              <About />
              <Skills />
              <Portfolio />
              <Contact />
          </Route>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
