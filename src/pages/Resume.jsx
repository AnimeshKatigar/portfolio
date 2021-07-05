import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Particle from "../styles/Particle";
import Resumecontent from "./ResumeContent";
// import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "../styles/resume.css";
import { Work, Education } from "../assets/data/Data";

function Resume() {
  return (
    <div className="CardMainSection resume-section">
      <Particle />
      <div className="">
        <div style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            //    href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </div>
        <div className="resume">
          <div className="resume-left">
            <div className="resume-work">
              <h3 className="resume-title">Work Experience</h3>
              {Work.map((work) => (
                <Resumecontent {...work} />
              ))}
            </div>
            <div className="resume-education">
              <h3 className="resume-title">Education</h3>
              {Education.map((edu) => (
                <Resumecontent {...edu} />
              ))}
            </div>
          </div>
          {/* <div className="resume-right">
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </div> */}
        </div>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row> */}
      </div>
    </div>
  );
}

export default Resume;
