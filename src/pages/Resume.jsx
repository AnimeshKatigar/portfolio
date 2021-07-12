import React from "react";
import Button from "react-bootstrap/Button";
import Particle from "../styles/Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../assets/Resume_Animesh_Katigar.pdf";
import "../styles/resume.css";
import { Work, Education, skillset } from "../assets/data/Data";

function Resume() {
  return (
    <div className="CardMainSection resume-section">
      <Particle />
      <div className="">
        <Button variant="primary" href={pdf} target="_blank">
          <i class="fa fa-download"></i>
          &nbsp;&nbsp;Resume
        </Button>
        <div className="resume">
          <div className="resume-left">
            <div>
              <h3 className="resume-title">
                <span style={{ color: "#CD5FF8" }}>Professional</span> Skillset
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {skillset.map((skill) => (
                  <div className="skills-container">
                    <p
                      style={{
                        fontSize: "25px",
                        marginBottom: "10px",
                        color: "#CD5FF8",
                      }}
                    >
                      {skill.title}
                    </p>
                    {skill.content}
                  </div>
                ))}
              </div>
            </div>
            <div className="resume-work">
              <h3 className="resume-title">
                <span style={{ color: "#CD5FF8" }}>Work</span> Experience
              </h3>
              {Work.map((work) => (
                <Resumecontent {...work} />
              ))}
            </div>
            <div className="resume-education">
              <h3 className="resume-title" style={{ color: "#CD5FF8" }}>
                Education
              </h3>
              {Education.map((edu) => (
                <Resumecontent {...edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
