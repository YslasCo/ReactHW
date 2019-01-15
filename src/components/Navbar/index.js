import React from "react";
import "../styles/Navstyle.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" id="brandy" href="http://www.nhm.ac.uk/discover/human-evolution.html">
        Clicky Game
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://www.nhm.ac.uk/discover/human-evolution.html">
              Your Score: 
            </a>
          </li>
          <li className="nav-item active">
          </li>
          <li className="nav-item" id="topScore">
            <a className="nav-link" id="topScore" href="http://www.nhm.ac.uk/discover/human-evolution.html">
             Top Score:
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;