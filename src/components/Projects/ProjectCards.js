import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const lines = props.description.split('<br/>');
  return (
    <Card className="project-card-view">
      {props.imgPath !== "null" && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* {"\n"}
        {"\n"} */}
        {/* <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text> */}
        {lines.map((line, index) => (
          <Card.Text key={index} style={{ textAlign: "justify" }}>
            {line}
          </Card.Text>
        ))}
        {props.ghLink !== "null" && (<Button variant="primary" href={props.ghLink} target="_blank">
          {/* <BsGithub /> &nbsp; */}
          {props.isBlog? <CgWebsite/> : <BsGithub/>} &nbsp;
          {props.isBlog ? "Report" : "GitHub"}
        </Button>)}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
