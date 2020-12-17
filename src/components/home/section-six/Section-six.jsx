import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Section-six.css";

export default function SectionSix() {
  return (
    <Container fluid className="section-six">
      <Row>
        <Col className="section-six-title">
          <h3>
            <b>Download my resume</b>
          </h3>
          <p className="p-section-six">
            I'm full Stack developer open to work in exciting new projects.
          </p>
          <Button>Download now!</Button>
        </Col>
      </Row>
    </Container>
  );
}
