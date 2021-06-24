import React from "react";
import "../styles/home.css";

function Navbar() {
  return (
    <div>
      <header>
        <a href="#" class="logo">
          Animesh
        </a>
        <ul>
          <li>
            <a href="#" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
