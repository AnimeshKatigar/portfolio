import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../styles/Particle";
import Resumecontent from "./ResumeContent";
// import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "../styles/resume.css";

function Resume() {
  const Work = [
    {
      title: "NAMASYS Consultants Pvt Ltd, Delhi",
      desc: "Frontend Web Developer",
      date: "June 2020 - August 2020",
      content: [
        "Worked on 5 Projects: NUWEBAPP (AI app), Project Management (Task manager), FINESSE STEALTH (Ecommerce app), SACRD (Financial app) and NAMASYS TABLE (Flexible Table Package).",
        "Tools and Technologies used: ReactJS, VSCode, Postman, Figma, Adobe XD, Adobe Photshop.",
      ],
    },
    {
      title: "NAMASYS Consultants Pvt Ltd, Delhi",
      desc: "Frontend Web Developer",
      date: "June 2020 - August 2020",
      content: [
        "Worked on 5 Projects: NUWEBAPP (AI app), Project Management (Task manager), FINESSE STEALTH (Ecommerce app), SACRD (Financial app) and NAMASYS TABLE (Flexible Table Package).",
        "Tools and Technologies used: ReactJS, VSCode, Postman, Figma, Adobe XD, Adobe Photshop.",
      ],
    },
  ];

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
            <div style={{ width: "50%" }}>
              <h3 className="resume-title">Work Experience</h3>
              {Work.map((work) => (
                <Resumecontent {...work} />
              ))}

              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="Vidyalankar Institute of Technology "
                date="2018 - Present"
                content={[`CGPA:8.95 (Till 5th Sem)`]}
              />
              <Resumecontent
                title="12TH BOARD [ODM Public School,Odisha]"
                date="2015 - 2017"
                content={["Precentage: 88%"]}
              />
              <Resumecontent
                title="10TH BOARD [ST Mary's School,Odisha] "
                date="2005 - 2015"
                content={["Precentage: 86%"]}
              />
            </div>
          </div>
          <div className="resume-right">
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
          </div>
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
