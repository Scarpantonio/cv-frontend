import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SectionThree() {
  return (
    <Container id="about" className="section-three">
      <Row>
        <Col className="right-col-img">Image</Col>

        <Col sm className="left-col-title">
          <h3>
            <b>
              Hi there, my name's <br /> Carlos Scarpantonio
            </b>
          </h3>
          <p>
            I'm a Junior full Stack web developer located in Denver, Colorado.
            I'm a full Stack web developer located in Denver, Colorado.
          </p>
          <Button as={Link} to="/contact">
            Let's Chat!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
