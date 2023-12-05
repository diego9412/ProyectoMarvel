import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-md bg-secondary-subtle p-2">
      <div class="container-fluid">
        <NavLink class="navbar-brand" to="/comics">
          <img
            src="/src/assets/Logo.png"
            alt="Index"
            className="text-white"
            width={70}
          />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link fs-3" to="/comics">
                Comics
              </NavLink>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-3" href="#">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-3" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <NavLink className="nav-link fs-3" to="/login">
              Login
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}
