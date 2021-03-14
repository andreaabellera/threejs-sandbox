import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Router } from "react-router"

import Header from "./components/Header";
import ArrowPlayground from "./components/ArrowPlayground";
import BubblePlayground from "./components/BubblePlayground";
import CursorPlayground from "./components/CursorPlayground";
import TextPlayground from "./components/TextPlayground";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div className="app">
      <Header />
      {/* <Router>
        <Switch>
          <Route path="/arrows">
            <ArrowPlayground />
          </Route>

          <Route path="/bubbles">
            <BubblePlayground />
          </Route>

          <Route path="/cursor">
            <CursorPlayground />
          </Route>

          <Route path="/text">
            <TextPlayground />
          </Route>

          <Route path='/' render={() => (
              <Redirect to="/arrows" />
          )}
          />
        </Switch>
      </Router> */}
      <CursorPlayground />
      <Footer />
    </div>
  );
}

export default App;
