import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";

export default function SectionSix() {
  return (
    <Container fluid className="section-seven">
      <Row>
        <Col className="left-col-title">
          <h3>
            <b>DOWNLOAD MY RESUME</b>
          </h3>
          <p className="p-section-seven">
            Apps build with React, Hooks, Reduxs, Vue, Angular and Jquery,
            HTML/CSS Apps build with React, Hooks, Reduxs build with React
          </p>
          <Button>Download now!</Button>
        </Col>
      </Row>
    </Container>
  );
}
