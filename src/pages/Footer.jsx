import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div  className="footer">
        <div md="4" className="footer-copywright">
          <h3>Animesh Katigar</h3>
        </div>
        <div md="4" className="footer-copywright">
          <h3>Made with 💜 and ☕</h3>
        </div>
        <div md="4" className="footer-body">
        <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnimeshKatigar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/animesh-katigar-2471141a4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anony.mesh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
        </div>
    </div>
  );
}

export default Footer;
