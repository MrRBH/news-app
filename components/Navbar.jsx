import React from "react";
// import {  } from "react-router-dom";
// import PropTypes from 'prop-types'

const Navbar =()=> {
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Newsapp
            </a >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Genral">
                    Genral
                  </a>
                </li>
               
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default Navbar;
