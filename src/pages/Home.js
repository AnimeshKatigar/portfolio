/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";

import moonImg from "../assets/moon.png";
import starsImg from "../assets/stars.png";
import mountains_behindImg from "../assets/mountains_behind.png";
import mountains_frontImg from "../assets/mountains_front.png";
import animeshImg from "../assets/animeshK.png";
import { details } from "../assets/data/Data";
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
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 4) {
      setLoading(false);
    }
  };
  return (
    <div className="MainHomeScreen">
      <div
        className="loadingDiv"
        style={{ display: loading ? "flex" : "none" }}
      >
        <div className="loading">
          <div></div>
          <div></div>
        </div>
      </div>
      <section style={{ display: loading ? "none" : "flex" }}>
        <img src={starsImg} id="stars" alt="stars" onLoad={imageLoaded} />
        <img src={moonImg} id="moon" alt="moon" onLoad={imageLoaded} />
        <img
          src={mountains_behindImg}
          id="mountains_behind"
          alt="mountains_behind"
          onLoad={imageLoaded}
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
          onLoad={imageLoaded}
        />
      </section>
      <div className="sec" id="sec">
        <div className="about-container">
          <div className="personal-details">
            <div>
              <img
                alt="ProfileImage"
                src={animeshImg}
                width="305"
                height="320"
                className="profileImg"
              />
            </div>

            <h2>Personal Details</h2>
            <div className="profile-details">
              {details.map((detail) => (
                <>
                  <div
                    style={{
                      width: "30%",
                      fontWeight: "500",
                      textAlign: "left",
                      marginBottom: "5px",
                    }}
                  >
                    {detail.title}
                  </div>
                  <div
                    style={{
                      width: "70%",
                      textAlign: "left",
                      fontWeight: "300",
                    }}
                  >
                    : {detail.desc}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="about-me">
            <div
              style={{ minHeight: 276, display: "flex", alignItems: "center" }}
            >
              <div>
                <h2>
                  Hi there! <span className="wave">👋🏻</span>
                  <br /> I am{" "}
                  <span style={{ color: "#CD5FF8" }}>Animesh Katigar</span>
                </h2>

                <Typewriter
                  options={{
                    strings: [
                      "IT Student",
                      "ReactJS Developer",
                      "Freelance developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </div>{" "}
            <div
              style={{
                textAlign: "left",
                marginTop: "50px",
                width: "100%",
                fontWeight: 300,
              }}
            >
              <h1 style={{ fontSize: "2.2em", fontWeight: "600" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <br />
              <p className="home-about-body">
                A self-taught, hardworking, and organized individual who loves
                to make things that live on the internet. My strength lies in
                designing, developing, and testing websites. I am fluent in
                classics like
                <span style={{ color: "#CD5FF8" }}> Javascript</span> and{" "}
                <span style={{ color: "#CD5FF8" }}>Python</span>.
                <br />
                <br />
                Whenever possible, I apply my passion for developing products
                with
                <span style={{ color: "#CD5FF8" }}>
                  {" "}
                  Modern Javascript Frameworks
                </span>
                &nbsp; like
                <span style={{ color: "#CD5FF8" }}> ReactJS</span> and{" "}
                <span style={{ color: "#CD5FF8" }}>NodeJS</span>.
                <br />
                Apart from coding, some other activities that I love to do!
                <ul className="about-list">
                  <li>‣ Playing Games 🎮</li>
                  <li>‣ Traveling 🏔️</li>
                  <li>‣ Football ⚽</li>
                  <li>‣ Listening to music 🎶</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
