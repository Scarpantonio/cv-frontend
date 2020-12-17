import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Container, Col } from "react-bootstrap";
import "./section-one.css";

const SectionOne = () => {
  return (
    <Container className="section-one">
      <Row>
        <Col className="left-col-title header">
          <h2 className="left-col-real-title">
            Let's Build Amazing Web Apps Together!
          </h2>
          <p>
            I'm a passionate full Stack web developer located <br />
            in Denver, Colorado.
          </p>
          <Button bsPrefix="super-btn" as={Link} to="/contact">
            Say Hello!
          </Button>
        </Col>

        <Col sm className="right-col-img">
          <Image alt="carlos img" src="/img/carlos.png" responsive />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
