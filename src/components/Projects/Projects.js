import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ppg from "../../Assets/Projects/ppg.png"
import mnist from "../../Assets/Projects/mnist.png"
import tesla from "../../Assets/Projects/tesla.png"
import anime from "../../Assets/Projects/anime.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="null"
              isBlog={true}
              title="Surfstore: A Distributed File Storage System"
              description="Built a Horizontally Scalable File Storage System in Go, storing data across multiple block and metadata servers. <br/>
This project makes use of a .proto file to generate grpc code so that the client and server stub can use different programming languages and can belong to different devices. <br/>
Implemented Raft consensus algorithm to sync changes across multiple metadata servers."
              ghLink="null"
              // demoLink="https://chatify-49.web.app/"
              // isBlog="yes"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="null"
              isBlog={true}
              title="TritonHTTP: A Server written in Go"
              description="Implemented a Go-based HTTP server from scratch to handle multiple virtual hosts, each serving content from distinct document roots. <br/>
Leveraged Go's concurrency model to handle multiple client connections simultaneously using goroutines. <br/>
The server parses the incoming requests and, based on the specifications of TritonHTTP, generates and serves 200, 400, and 404 responses."
              ghLink="null"
              // demoLink="https://chatify-49.web.app/"
              // isBlog="yes"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="null"
              isBlog={true}
              title="Performance Analysis of Co-ordinate Descent vs Logistic Regression"
              description="In this analysis study I performed a brief comparison of the performance of Logistic regression and 3 different varieties of co-ordinate descent i.e. Random Co-ordinate Descent, Iterative Co-ordinate Descent and Gradient based Co-ordinate Descent on the wine data set from sk-learn. <br/>
Although, the co-ordinate descent failed to achieve log-loss values comparable to logistic regression, they converged faster and had reasonable loss and accuracy values to be considered for practical use."              
              ghLink="https://drive.google.com/file/d/1Pn1khXBtFjpyHkz09qiY5CRZBfTksCfB/view?usp=sharing"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mnist}
              isBlog={true}
              title="Prototype Selection Techniques For 1-Nearest Neighbour"
              description="Compared and proposed different methods for prototype selection on huge datasets to summarize the data such that 1-NN model yields optimal test results. <br/>
              Achieved identical test accuracy of 96.7% using only about 11% of MNIST dataset after prototyping."              
              ghLink="https://drive.google.com/file/d/1nodxS1qTK765bXoC-5JXkWDJ_8dBG9Td/view"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppg}
              isBlog={true}
              title="Hypertension Prediction using PPG Signals"
              description="Developed robust ETL pipeline to process the MIMIC-III dataset ensuring high data quality and integrity for downstream analytics. <br/>
              Achieved a test accuracy of 74% and a sensitivity of 91% on the MIMIC-III dataset."
              ghLink="https://drive.google.com/file/d/1c3mTvv48zX0mRZf2zoSyrgkbfemB52xO/view"
              // demoLink="https://chatify-49.web.app/"
              // isBlog="yes"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="Anime Recommendation Website"
              description="Developed a website that suggests similar animes to a given anime entered by the user. <br/>
Implemented a cosine similarity algorithm to calculate the similarity between anime vectors."
              ghLink="https://github.com/LoukikNaik/Anime-Recommendation-Website-Using-Django"
              demoLink="https://animerecommendersite.onrender.com/"                      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tesla}
              isBlog={false}
              title="Tesla Website Front End Clone"
              description="Developed a React-based front end clone of the Tesla website and deployed it to GitHub Pages."
              ghLink="https://github.com/LoukikNaik/tesla-clone"
              demoLink="https://loukiknaik.github.io/tesla-clone/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
