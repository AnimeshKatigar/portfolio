import React from "react";
import "../styles/resume.css";

function ResumeContent(props) {
  return (
    <div style={{ display: "flex",paddingLeft:15}}>
      <p className="date-div">
        <em>{props.date}</em>
      </p>
      <div className="resume-item">
        <h4 className={props.title ? "resume-title" : "resume-no-title"}>
          {props.title}
          <p style={{ fontWeight: "250", fontSize: "15px", margin: "5px 0px" }}>
            {props.desc}
          </p>
        </h4>
        <ul style={{paddingBottom:20}}>
          {props.content.map((value, index) => (
            <li key={index}> ‣ {value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeContent;
