import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
          <div id='header' className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>About Me</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/project-gallery" end>Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" end>Contact</NavLink>
                </li>
              </ul>
            </div>
        </nav>
    );
}

export default Header