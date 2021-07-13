import React from "react";
import sacrd from "../sacrdDB.png";
import nuwebapp from "../NuwebApp.png";
import pms from "../PMS.png";
import finesse from "../finesse.png";
import vavo from "../vavo.png";

import {
  SiTensorflow,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPython,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiJava,
  SiTypescript,
  SiNodeDotJs,
  SiGithub,
  SiAdobexd,
  SiAdobephotoshop,
  SiFigma,
  SiFirebase,
} from "react-icons/si";

export const Work = [
  {
    title: "NAMASYS Consultants Pvt Ltd, Delhi",
    desc: "Frontend Web Developer",
    date: "March 2021 - June 2021",
    content: [
      "Worked on 5 Projects: NUWEBAPP (AI app), Project Management (Task manager), FINESSE STEALTH (Ecommerce app), SACRD (Financial app) and NAMASYS TABLE (Flexible Table Package).",
      "Out of these, NUWEBAPP, Project Management and NAMASYS TABLE were built from scratch. I was handled with the responsibilities of developing webpages, communicating with clients, integrating APIs, etc.",
      "And in the remaining projects my responsibilities were to handle new changes, refactor code, make design mobile responsive, etc.",
      "Tools and Technologies used: ReactJS, REDUX, VSCode, Postman, Figma, Adobe XD and Adobe Photshop.",
    ],
  },
  {
    title: "THE VOUCH Digital, Mumbai",
    desc: "Frontend Web Developer",
    date: "November 2020 - January 2021",
    content: [
      "Worked on frontend part of VAVO Web application. This project was aimed at marketing of brands, where the brands can hire influencers to market their products.",
      "My main tasks were to design webpages, integrate APIs and debugging",
      "Tools and Technologies used: ReactJS, VSCode, Postman and Figma",
    ],
  },
  {
    title: "MEACCS INNOVATIONS, Haryana",
    desc: "HR intern",
    date: "November 2020 - December 2021",
    content: [
      "Helped the supervisors for shortlisting, communicating and hiring candidates.",
      "Tools and Technologies used: ZOHO, Google drive and Google Sheets",
    ],
  },
];

export const Education = [
  {
    title: "Vidyalankar Institute of Technology, Wadala",
    desc: "B.E Information Technology",
    date: "2018 - Present",
    content: [
      "CGPA:8.95 (Till 5th Sem)",
      "Core Member of Creative Council (2018-2020)",
      "Core Member of Technical Group of ITSA committee (2019-2020)",
    ],
  },
  {
    title: "Pace Jr. College, Dadar",
    desc: "12th HSC",
    date: "2016 - 2018",
    content: [
      "Percentage: 77.85%",
      "Played my part in the winning team of cricket at EOS fest organized by Pace",
    ],
  },
  {
    title: "IES Modern English School, Dadar",
    desc: "10th SSC",
    date: "2011 - 2016",
    content: [
      "Percentage: 92.60%",
      "Became the first player to win an intra-school chess tournament consecutively for 2 years.",
    ],
  },
];

const languages = [
  {
    icon: <SiHtml5 />,
    name: "HTML",
  },
  {
    icon: <SiCss3 />,
    name: "CSS",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiPython />,
    name: "Python",
  },
  {
    icon: <SiJava />,
    name: "JAVA",
  },
];

const framework = [
  {
    icon: <SiReact />,
    name: "ReactJS",
  },
  {
    icon: <SiNodeDotJs />,
    name: "NodeJS",
  },
  {
    icon: <SiTensorflow />,
    name: "Tensorflow",
  },
];

const database = [
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <SiPostgresql />,
    name: "SQL",
  },
];
const softwares = [
  {
    icon: <SiGithub />,
    name: "GitHub",
  },
  {
    icon: <SiAdobexd />,
    name: "Adobe XD",
  },
  {
    icon: <SiAdobephotoshop />,
    name: "Photoshop",
  },
  {
    icon: <SiFigma />,
    name: "Figma",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
  },
];

export const skillset = [
  {
    title: "Languages",
    content: (
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {languages.map((lang) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 0px",
              marginLeft: "30px",
            }}
          >
            {lang.icon}&nbsp;&nbsp;‣ &nbsp;<span>{lang.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Frameworks",
    content: (
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {framework.map((lang) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 0px",
              marginLeft: "30px",
            }}
          >
            {lang.icon}&nbsp;&nbsp;‣ &nbsp;<span>{lang.name}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export const skillset1 = [
  {
    title: "Databases",
    content: (
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {database.map((lang) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 0px",
              marginLeft: "30px",
            }}
          >
            {lang.icon}&nbsp;&nbsp;‣ &nbsp;<span>{lang.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Softwares",
    content: (
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {softwares.map((lang) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 0px",
              marginLeft: "30px",
            }}
          >
            {lang.icon}&nbsp;&nbsp;‣ &nbsp;<span>{lang.name}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export const details = [
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

export const projects = [
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

export const intprojects = [
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
