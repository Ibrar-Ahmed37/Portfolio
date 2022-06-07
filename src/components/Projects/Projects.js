import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import {FadeTransform} from 'react-animation-components';
import Particle from "../Particle";
import Boxed from '../../Assets/boxed.svg';
import ahsiImg from '../../Assets/ahsiImg.svg';
import MedicalProjectImg from '../../Assets/proj1-img.svg';
import Github from "../About/Github";

function Projects() {
  return (
    <FadeTransform in transformProps={{
      enter:"scale(0.7)",
      exitTransform:"scale(0.4)"
      }}>
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
              imgPath={MedicalProjectImg}
              //isBlog={false}
              title="Health Project"
              description="A health project providing accurate visible graphic analytics of User's health Based on records. Type test2@gmail.com for email and test1234 for password."
              link="https://medical-frontend-main.netlify.app/analytics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Boxed}
              //isBlog={false}
              title="Online Grocery Store"
              description="Worked as a front end Engineer on this exciting online grocery store that delivers at your doorstep. Eliminating the interaction at grocery stores,this project turned out to be really helpful in corona virus."
              link="https://www.boxed.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ahsiImg}
              //isBlog={false}
              title="Medical Health Project For Women"
              description="A website to revolutionise the Women healthcare sector in Pakistan through the World Class Patient Centric Care."
              link="https://ahsi.netlify.app/"
            />
          </Col>
        </Row>
        <Github/>
      </Container>
    </Container>
    </FadeTransform>
  );
}

export default Projects;
