import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";

export default function SectionFive() {
  return (
    <Container id="work" className="section-one">
      <Row>
        <Col sm className="left-col-title header">
          <h2 className="left-col-real-title">
            <b>Check My Work On Github!</b>
          </h2>
          <p>
            He desarrollado aplicaciones con diferentes teconologias entre las
            princiaples ReactJs y nodeJS{" "}
          </p>
          <Button>Check Work!</Button>
        </Col>

        <Col sm className="right-col-img">
          <DiGithubBadge className="github-icon" />
        </Col>
      </Row>
    </Container>
  );
}
