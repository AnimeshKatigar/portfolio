import React from "react";
import "../styles/cards.css";
import Particle from "../styles/Particle";
import space from "../assets/image.png";
import ProjectCards from "./ProjectCards";
import { AiFillGithub } from "react-icons/ai";
import { projects, intprojects } from "../assets/data/Data";

const Cards = () => {
  return (
    <div className="CardMainContainer">
      <Particle />
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
        <span style={{ color: "#CD5FF8" }}>Personal</span> Projects
      </h2>
      <div className="Card-container">
        {projects.map((card) => (
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
        ))}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProjectCards
            imgPath={space}
            title="Space Invaders"
            codeLink="https://github.com/AnimeshKatigar/SpaceInvaders"
            description="An arcade shooter game created using PYGAME library which reminds you and brings you back to the golden era."
          />
        </div>
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
              the dark stuff, highly confidential stuff, malpractices are
              carried out in the deep web.....
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
