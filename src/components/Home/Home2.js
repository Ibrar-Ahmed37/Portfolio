import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ConnectForm from "../ConnectForm";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Allow Me to <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            I'm obsessed with making things and even more obsessed with <b className="purple">making things better. </b> I've been in the business of creating since I created my first website when I was in my school. I've been actively involved in the web development community for the last 5 years.              
              <br />
              <br />
              My specialty is<b className="purple"> full stack website development , app development </b>, pulling out entreprise level systems with my team. Working and collaborating on modern FrontEnd Frameworks and Libraries like<b className="purple"> React , Angular </b>
              and backend technologies like
              <i>
                <b className="purple"> Node , Java , .Net , python.</b>
              </i>
              <br/>
              <br />I am experienced in programming languages including
              <i>
                <b className="purple">JavaScript, Java, Python, C++</b>
              </i>
              , and SQL dialects including
              <i>
                <b className="purple"> SQL Server, Oracle PL/SQL, PostgreSQL, and MySQL</b>.
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">functional and scalable websites</b> and help my clients achieve their digital presence, providing them with high quality web and mobile app development.{" "}
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} style={{borderRadius:'20%',height:'700px'}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <ConnectForm/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ibrar-Ahmed37"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ibrar-khan-55891b15a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
