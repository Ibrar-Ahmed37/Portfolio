import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ibrar Ahmed </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I'm a young, energetic computer scientist,  always eager to learn and share, as its the only way to grow professionally.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I have worked as a Software Engineer At Uworx and a full time software Engineer at Xit Firm. Throughout my coding journey, I have won many competitive programming competitions and gained practical experience of the industry by getting my hands dirty on modern stacks ( MEAN , MERN , DRF) "{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
