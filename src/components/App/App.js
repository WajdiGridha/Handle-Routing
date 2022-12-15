import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1>MPDAM</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about/blogs">Blogs About</Link>
            </li>
            <li>
              <Link to="/about/section">Section About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/about/:type" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
