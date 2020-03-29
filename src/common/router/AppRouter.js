import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { MainMenu } from './../main_menu/MainMenu';

import Home from './../../screens/home/Home';
import About from './../../screens/about/About';
import Paises from './../../screens/paises/Paises';

export function AppRouter() {
  return (
    <Router>
      <MainMenu />   
      <Route path="/" exact component={Home} />
      <Route path="/paises/" component={Paises} /> 
      <Route path="/about/" component={About} /> 
      <Route render={() => <Redirect to="/" />} />
    </Router>
  );
}

export default AppRouter;