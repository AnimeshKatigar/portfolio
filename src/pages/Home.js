/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

import moonImg from "../assets/moon.png";
import starsImg from "../assets/stars.png";
import mountains_behindImg from "../assets/mountains_behind.png";
import mountains_frontImg from "../assets/mountains_front.png";
import {CgGames} from 'react-icons/cg'
import animeshImg from "../assets/animeshK.png";

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

  const details = [
    { title: "Name", desc: "Animesh Shrikant Katigar" },
    {
      title: "Date of birth",
      desc: "13/10/2000",
    },
    {
      title: "Location",
      desc: "Dadar, Mumbai",
    },
    {
      title: "Phone No.",
      desc: "+91 9221288192",
    },
    {
      title: "E-mail ID",
      desc: "katigaranimesh@gmail.com",
    },
    {
      title: "Nationality",
      desc: "Indian",
    },
  ];

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
        <div
          style={{
            display: "flex",
            marginBottom: "15px",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
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
            <div
              style={{ display: "flex", flexWrap: "wrap", margin: "20px 0px" }}
            >
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
          <div
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
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
              style={{ textAlign: "left", marginTop: "50px", width: "100%" }}
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
                  <li>‣ Treking 🏔️</li>
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

{
  /* <svg
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
        </svg> */
}
{
  /* <div>
            <img src={animeshImg} />
          </div> */
}
{
  /* <div className="" style={{ width: "40%",padding:10 }}>
            <div className="home-blob">
              <img src={profile} className="home-blob-img" alt="profile-img" />
            </div>
          </div> */
}
