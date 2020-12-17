import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";

export default function SectionFive() {
  return (
    <Container id="work" className="section-one">
      <Row>
        <Col sm className="left-col-title header">
          <h2 className="left-col-real-title">
            <b>Check My Work On Github!</b>
          </h2>
          <p>
            I have develop web apps using different technologies amount the main
            ReactJs, ExpressJs, MongoDB and NodeJS.
          </p>
          <Button
            bsPrefix="super-btn"
            href="https://github.com/Scarpantonio"
            target="_blank"
            rel="noreferrer"
          >
            Check Work!
          </Button>
        </Col>

        <Col sm className="right-col-img">
          <DiGithubBadge className="github-icon" />
        </Col>
      </Row>
    </Container>
  );
}
