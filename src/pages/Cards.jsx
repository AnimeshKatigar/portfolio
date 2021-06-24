import React from "react";
import "../styles/cards.css";
import Tilt from "react-parallax-tilt";
import Particle from "../styles/Particle"
import { animated,useSpring } from "react-spring";

const Cards = () => {
  const projects = [
    {
      no: "01",
      title: "Covid Tracker",
      desc: "A coronavirus live-stats tracker with a Map, Past-data graph, and Country cases.",
      link: "https://coronatracker-bb887.web.app",
    },
    {
      no: "02",
      title: "Crypto",
      desc: "A simple minimalistic web app that displays live information of the crypto coins such as Bitcoin, Ethereum, Dogecoin, etc.",
      link: "https://cryptocurrency-tracker-1310.netlify.app/",
    },
    {
      no: "03",
      title: "Weather Website",
      desc: "This is a weather website which shows the current weather of the city we mentioned.",
      link: "https://cryptocurrency-tracker-1310.netlify.app/",
    },
    {
      no: "04",
      title: "The Simon Game",
      desc: "Everyone has played The Simon Game once in his/her life, this site will bring that nostalgia ❤",
      link: "https://animeshkatigar.github.io/SimonGame/",
    },
    {
      no: "05",
      title: "Drumkit",
      desc: "A Drumkit website that plays the sound of a specific instrument",
      link: "https://animeshkatigar.github.io/Drumkit/",
    },
  ];

 
  return (
    <div className="CardMainContainer" >
        <Particle/>
      <div className="Card-container">
        {projects.map((card) => (
          <Tilt>
            <div className="card">
              <div className="content">
                <h2>{card.no}</h2>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="btn">
                  <a href={card.link} target="_blank" rel="noreferrer">
                    {card.link ? "Live" : "Code"}
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Cards;
