import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Viewport from "./components/Viewport";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Viewport />
      <Footer />
    </div>
  );
}

export default App;
