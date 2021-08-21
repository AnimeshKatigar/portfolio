import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  
  return (
    <Card className="project-card-view">
      <div
        className="loadingDiv"
        style={{
          display: loading ? "flex" : "none",
          height: 100,
          backgroundColor: "transparent",
        }}
      >
        <div class="loader-3">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
        </div>
      </div>

      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ height: 160, display: loading && "none" }}
        onLoad={() => {
          counter.current += 1;
          if (counter.current >= 1) {
            setLoading(false);
          }
        }}
      />

      <Card.Body>
        <Card.Title>
          <h3>{props.title}</h3>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", padding: "10px" }}>
          {props.description}
        </Card.Text>
        {props.codeLink && (
          <div className="btn">
            <a href={props.codeLink} target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
