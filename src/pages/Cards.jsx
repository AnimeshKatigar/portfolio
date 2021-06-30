import React from "react";
import "../styles/cards.css";
import Tilt from "react-parallax-tilt";
import Particle from "../styles/Particle";
import ProjectCards from "./ProjectCards";
import sacrd from "../assets/sacrdDB.png";
import nuwebapp from "../assets/NuwebApp.png";
import pms from "../assets/PMS.png";
import finesse from "../assets/finesse.png";
import vavo from "../assets/vavo.png";
import { AiFillGithub } from "react-icons/ai";

const Cards = () => {
  const projects = [
    {
      no: "01",
      codeLink: "https://github.com/AnimeshKatigar/covid-tracker",
      title: "Covid Tracker",
      desc: "A coronavirus live-stats tracker with a Map, Past-data graph, and Country cases.",
      link: "https://coronatracker-bb887.web.app",
    },
    {
      no: "02",
      title: "Crypto",
      codeLink: "https://github.com/AnimeshKatigar/crypto-tracker",
      desc: "A simple minimalistic web app that displays live information of the crypto coins such as Bitcoin, Ethereum, Dogecoin, etc.",
      link: "https://cryptocurrency-tracker-1310.netlify.app/",
    },
    {
      no: "03",
      codeLink: "https://github.com/AnimeshKatigar/Weather",
      title: "Weather Website",
      desc: "This is a weather website which shows the current weather of the city we mentioned.",
      link: "https://infinite-earth-32951.herokuapp.com/",
    },
    {
      no: "04",
      codeLink: "https://github.com/AnimeshKatigar/SimonGame",
      title: "The Simon Game",
      desc: "Everyone has played The Simon Game once in his/her life, this site will bring that nostalgia ❤",
      link: "https://animeshkatigar.github.io/SimonGame/",
    },
    {
      no: "05",
      codeLink: "https://github.com/AnimeshKatigar/Drumkit",
      title: "Drumkit",
      desc: "A Drumkit website that plays the sound of a specific instrument",
      link: "https://animeshkatigar.github.io/Drumkit/",
    },
  ];

  const intprojects = [
    {
      title: "FINESSE",
      desc: "FINESSE is a fashion e-commerce web application, which was made for a fashion company from U.S.A. My responsibility was to make the homepage responsive to small screens.",
      img: finesse,
    },
    {
      title: "NUWEBAPP",
      desc: "As part of the project, I was responsible for designing all the required pages, integrating APIs, debugging, etc. The entire customer dashboard, admin dashboard and profile section was developed by me.",
      img: nuwebapp,
    },
    {
      title: "SACRD",
      desc: "SACRD is a Multi-Currency, Multi-GAAP (Generally Accepted Accounting Principles) Financial Reporting Application. In this project I refactored the code and updated the design and functionalities according to  the client's requirements.",
      img: sacrd,
    },
    {
      title: "VAVO Digital",
      desc: "This project was aimed at ​Influencer Marketing​. As part of the project, I designed web pages as per the designs provided, integrated APIs, debugging and handling of errors, etc.",
      img: vavo,
    },
    {
      title: "Project Management",
      desc: "Project management app was created for project planning, scheduling, resource allocation, change management and handle tasks of specific projects. My main task was to design and create all the pages and integrate APIs.",
      img: pms,
    },
  ];

  return (
    <div className="CardMainContainer">
      <Particle />
      <h2 className="personalProjects">
        <span style={{ color: "#CD5FF8" }}>Personal</span> Projects
      </h2>
      <div className="Card-container">
        {projects.map((card) => (
          // <Tilt>
          <div className="card">
            <div className="code-link">
              {" "}
              <a
                href={card.codeLink}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  gitcode-icon"
              >
                <AiFillGithub style={{ fontSize: "22px" }} />
              </a>
            </div>
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
          // </Tilt>
        ))}
      </div>
      <h2 className="personalProjects">
        <span style={{ color: "#CD5FF8" }}>Corporate</span> Projects
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {intprojects.map((project) => (
          <ProjectCards
            imgPath={project.img}
            title={project.title}
            description={project.desc}
          />
        ))}
      </div>
      <h2 className="personalProjects">
        <span style={{ color: "#CD5FF8" }}>Blog</span>
      </h2>
      <div className="Card-container">
        <div className="card">
          <div className="content">
            {/* <h2>{card.no}</h2> */}
            <h3>Dark Web</h3>
            <p>
              The world web is very big, but what we see is just a gist of how
              actually the web is. It contains of surface and deep web and all
              the dark stuff, highly confidential stuff, malpractices are carried
              out in the deep web.....
            </p>
            <div className="btn">
              <a
                href="https://animeshkatigar.blogspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
