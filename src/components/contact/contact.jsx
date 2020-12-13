import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
// import { Form } from "react-bootstrap/Form";
import "./contact.css";
// import Navigationbar from "../navbar/navbar";

const Contact = () => {
  return (
    <div>
      <Container className="contact">
        <Row>
          <Col>
            <h1 className="contact-title">
              <strong>
                Thanks for tacking the time to reach out. How Can I help you
                today?
              </strong>
            </h1>
          </Col>
        </Row>
      </Container>

      <Container className="contact-form">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button className="submit-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;

// <Form.Text className="text-muted">
//                   We'll never share your email with anyone else.
//                 </Form.Text>
