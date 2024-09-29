import React, { useState } from "react";
import "../styles/home.css";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineProfile,
  AiOutlineHome,
} from "react-icons/ai";

function Navbar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="navbarMainContainer">
      <nav>
        <a href="/" className="logo">
          Ani<span style={{ color: "#CD5FF8" }}>ME</span>sh
        </a>
        <ul className="nav-links">
          <li onClick={() => setSelected(0)}>
            <a
              href="/"
              className={
                selected === 0 && window.location.pathname === "/" && "active"
              }
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="navbar-text">Home</span>
              <span className="navbar-icons">
                {" "}
                <AiOutlineHome />
              </span>
            </a>
          </li>

          <li onClick={() => setSelected(3)}>
            <a
              href="/resume"
              className={
                selected === 3 ||
                (window.location.pathname === "/resume" && "active")
              }
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="navbar-text">Resume</span>
              <span className="navbar-icons">
                {" "}
                <AiOutlineProfile />
              </span>
            </a>
          </li>
          <li onClick={() => setSelected(2)}>
            <a
              href="/project"
              className={
                selected === 2 ||
                (window.location.pathname === "/project" && "active")
              }
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="navbar-text">Projects</span>
              <span className="navbar-icons">
                <AiOutlineFundProjectionScreen />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
