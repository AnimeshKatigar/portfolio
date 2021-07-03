import React, { useEffect } from "react";
// import React, { Component } from "react";

import moonImg from "../assets/moon.png";
import starsImg from "../assets/stars.png";
import mountains_behindImg from "../assets/mountains_behind.png";
import mountains_frontImg from "../assets/mountains_front.png";
import Particle from "../styles/Particle";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo integer
        malesuada nunc vel risus commodo. Vitae turpis massa sed elementum
        tempus egestas sed. Turpis in eu mi bibendum. Quam nulla porttitor massa
        id neque aliquam vestibulum morbi blandit. Sit amet tellus cras
        adipiscing enim eu. Convallis tellus id interdum velit. Leo a diam
        sollicitudin tempor id eu nisl nunc mi. Lacinia quis vel eros donec.
        Varius duis at consectetur lorem donec massa. Tortor pretium viverra
        suspendisse potenti nullam ac tortor vitae purus. Id interdum velit
        laoreet id donec ultrices tincidunt. Pulvinar sapien et ligula
        ullamcorper malesuada proin libero. Consequat ac felis donec erbi
        tristique. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan. Eu facilisis sed odio morbi quis commodo. Pellentesque
        adipiscing commodo elit at imperdiet dui accumsan sit amet. Vitae purus
        faucibus ornare suspendisse sed nisi. Dui accumsan sit amet nulla
        facilisi morbi tempus. Amet tellus cras adipiscing enim eu turpis
        egestas. Laoreet sit amet cursus sit. Leo a diam sollicitudin tempor id
        eu nisl nunc mi. Sed vulputate odio ut enim. Egestas egestas fringilla
        phasellus faucibus scelerisque eleifend. Urna condimentum mattis
        pellentesque id nibh tortor id aliquet lectus. Suspendisse in est ante
        in nibh mauris cursus mattis molestie.
      </div>
    </div>
  );
}
export default Home;
