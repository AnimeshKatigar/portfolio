import React from "react";
import Card from "react-bootstrap/Card";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height:160}}/>
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
