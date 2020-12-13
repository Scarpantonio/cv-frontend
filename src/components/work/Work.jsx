// reducir el tamano de las letras en la descripcion de cada uno de los elemntos
// Recordar que podemos agregar otro tipo de cartas debajo de CardDeck podemos agrgar el tipo columna etc.
// Agregar un background a la seccion uno. de la pagina de work

import React from "react";
import { Card, CardDeck, Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../home/footer/Footer";
import {
  DiPhotoshop,
  DiSass,
  DiNodejsSmall,
  DiGithubBadge,
  DiAtom,
  DiAngularSimple,
  DiJavascript1,
  DiHtml5,
  DiJqueryLogo,
  DiMongodb
} from "react-icons/di";

const Work = () => {
  return (
    <div>
      <Container className="work">
        <Row>
          <Col>
            <h1 className="contact-title">
              <strong>
                <p>
                  Here are a few projects I've worked on recently. Want to see
                  more?
                </p>
                <Button>Email me</Button>
              </strong>
            </h1>
          </Col>
        </Row>
      </Container>
      <CardDeck
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "40px"
        }}
      >
        <Card style={{}}>
          <Card.Body>
            <Card.Title>Quiz App</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
              <small className="text-muted">View Website</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiAngularSimple className="dev-icons" />
              <DiHtml5 className="dev-icons" />
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>MyFlix</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional contentThis card has supporting text below as a natural
              lead-in to additional content.{" "}
              <small className="text-muted">View Website</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiAngularSimple className="dev-icons" />
              <DiHtml5 className="dev-icons" />
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>MSL</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
              <small className="text-muted">View Website</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiAngularSimple className="dev-icons" />
              <DiHtml5 className="dev-icons" />
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>{" "}
      <CardDeck
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "40px"
        }}
      >
        <Card>
          <Card.Body>
            <Card.Title>Todo App</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
              <small className="text-muted">View Website</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiAngularSimple className="dev-icons" />
              <DiHtml5 className="dev-icons" />
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>PokeDex</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
              <small className="text-muted">View Website</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiAngularSimple className="dev-icons" />
              <DiHtml5 className="dev-icons" />
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Carmen Quintero</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
              <small className="text-muted">View Website</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiAngularSimple className="dev-icons" />
              <DiHtml5 className="dev-icons" />
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>{" "}
      <Footer />
    </div>
  );
};

export default Work;

// de quere volver a agregar las imagenes en cada carta

// <Container className="work-container">
//         <Row className="work-row">
//           <Col>1 of 2</Col>
//           <Col>2 of 2</Col>
//         </Row>
//         <Row>
//           <Col>1 of 3</Col>
//           <Col>2 of 3</Col>
//           <Col>3 of 3</Col>
//         </Row>
//       </Container>{" "}
