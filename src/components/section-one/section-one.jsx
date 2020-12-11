import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
// import { Container, Col } from "react-bootstrap";
import "./section-one.css";

const SectionOne = () => {
  return (
    <Container className="section-one">
      <Row>
        <Col className="left-col-title header">
          <h2 className="left-col-real-title">
            <b>Let's Build Amazing Web Apps Together!</b>
          </h2>
          <p>I'm a full Stack web developer located in Denver, Colorado.</p>
          <Button>Say Hello</Button>
        </Col>

        <Col sm className="right-col-img">
          <Image alt="carlos img" src="/img/carlos.png" responsive />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
