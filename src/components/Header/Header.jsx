import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoMarvel from "/Logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md p-2">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logoMarvel} alt="Index" className="text-white" width={70} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fs-3" to="/comics">
                Comics
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-3" to="/aboutUs">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-3" to="/contactUs">
                Contact us
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <NavLink className="nav-link fs-3" to="/login">
              Login
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}
