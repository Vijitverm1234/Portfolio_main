import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-sec">
      <div className="logo-sec">
        <div className="logo">
           V
        </div>
        <div className="title">
            Vijit Verma
        </div>
      </div>
      <div className="nav-link">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/about">About</Link>
        </li>
        <li>
          <Link className="link" to="/services">Services</Link>
        </li>
        <li>
          <Link className="link" to="/contact">Contact</Link>
        </li>
      </div>
      <div className="nav-social">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
