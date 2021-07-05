import React, { useEffect } from "react";
// import React, { Component } from "react";

import moonImg from "../assets/moon.png";
import starsImg from "../assets/stars.png";
import mountains_behindImg from "../assets/mountains_behind.png";
import mountains_frontImg from "../assets/mountains_front.png";
import profile from "../assets/perfil.png";
import blob from "../assets/blob.svg";

import "../styles/home.css";

function Home() {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let stars = document.getElementById("stars");
        let moon = document.getElementById("moon");
        let mountains_behind = document.getElementById("mountains_behind");
        let mountains_front = document.getElementById("mountains_front");
        let hey = document.getElementById("hey");
        let there = document.getElementById("there");
        let btn = document.getElementById("btn");
        let value = window.scrollY;

        stars.style.left = value * 0.25 + "px";
        moon.style.top = value * 1.05 + "px";
        mountains_behind.style.top = value * 0.5 + "px";
        mountains_front.style.top = value * 0 + "px";
        hey.style.marginRight = value * 1.5 + "px";
        hey.style.marginTop = value * 1.5 + "px";
        there.style.marginLeft = value * 1.5 + "px";
        there.style.marginTop = value * 1.5 + "px";
        btn.style.marginTop = value * 1.5 + "px";
      },
      true
    );
  });

  return (
    <div className="MainHomeScreen">
      {/* <Particle /> */}
      <section>
        <img src={starsImg} id="stars" alt="stars" />
        <img src={moonImg} id="moon" alt="moon" />
        <img
          src={mountains_behindImg}
          id="mountains_behind"
          alt="mountains_behind"
        />
        <h2 id="text">
          <span id="hey">Hello</span> <span id="there">World </span>
        </h2>
        <a
          id="btn"
          onClick={() => {
            var elementS = document.getElementById("sec");
            elementS?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
        >
          Explore
        </a>
        <img
          src={mountains_frontImg}
          id="mountains_front"
          alt="mountains_front"
        />
      </section>
      <div className="sec" id="sec">
        <h2>Hi I am Animesh and here's something about me!</h2>
        <div>
          <div></div>
          <div className="" style={{ width: "40%",padding:10 }}>
            <div className="home-blob">
              <img src={profile} className="home-blob-img" alt="profile-img" />
            </div>
          </div>
        </div>

        {/* <svg
          className="home-blob"
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image className="home-blob-img" xlinkHref="../assets/perfil2.png" />
          </g>
        </svg> */}
      </div>
    </div>
  );
}
export default Home;
