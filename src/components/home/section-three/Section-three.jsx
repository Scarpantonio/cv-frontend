import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SectionThree() {
  return (
    <Container className="section-three">
      <Row>
        <Col className="right-col-img">Image</Col>
        <Col sm className="left-col-title">
          <h3>
            <b>
              Hi there, my name's <br /> Carlos Scarpantonio
            </b>
          </h3>
          <p>
            I am a junior full stack web developer with good knowledge of
            front-end and back-end techniques. I love structure and order and I
            also stand for quality. I love spending time on fixing little
            details and optimizing web apps.
          </p>
          <Button bsPrefix="super-btn" as={Link} to="/contact">
            Let's Chat!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
