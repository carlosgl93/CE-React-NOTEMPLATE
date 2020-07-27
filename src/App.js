import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import { Nav } from "./Components/Navbar"
import { Footer } from "./Components/Footer"
import './App.css';

function App() {
  return (
    
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <h1>Not Found!</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    
  );
}

export default App;
