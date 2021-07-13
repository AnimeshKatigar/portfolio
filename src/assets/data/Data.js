import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
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

export const skillset1=[
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
]