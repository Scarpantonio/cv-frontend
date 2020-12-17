// reducir el tamano de las letras en la descripcion de cada uno de los elemntos
// Recordar que podemos agregar otro tipo de cartas debajo de CardDeck podemos agrgar el tipo columna etc.
// Agregar un background a la seccion uno. de la pagina de work

import React from "react";
import "./work.css";
import { Link } from "react-router-dom";
import { Card, CardDeck, Container, Row, Col, Button } from "react-bootstrap";
import { AiFillHeart, AiFillExperiment } from "react-icons/ai";
import Footer from "../home/footer/Footer";
import { FaVuejs, FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
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
            <h1 className="work-title">
              <AiFillExperiment className="msl-icons" />
              <strong>
                <motion.p animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  Here are a few projects I've worked <br /> on recently.
                </motion.p>
                <Button bsPrefix="super-btn" as={Link} to="/contact">
                  Let's talk
                </Button>
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
            <a
              href="https://scarpantonio.github.io/quizzes-app/welcome"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Title>Quizzes</Card.Title>
            </a>
            <Card.Text>
              Basic quiz application made with AngularJs that presents users
              with multiple choice questions on various topics. Once users have
              answered all the questions, the application will display their
              results
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiAngularSimple className="work-dev-icons" />
              <DiHtml5 className="work-dev-icons" />
              <DiSass className="work-dev-icons" />
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>MyFlix</Card.Title>
            <Card.Text>
              Myflix is an app featuring different popular movies. Each movie is
              accompanied by information on the movie author, genre and
              director. The user can log in, explore the movies, and even add
              favorites to their profile.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiHtml5 className="work-dev-icons" />
              <DiNodejsSmall className="work-dev-icons" />
              <DiMongodb className="work-dev-icons" />
              <DiJavascript1 className="work-dev-icons" />
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
              ToDo app made with Vue.js. Consist of a single view where users
              will be able to create, update, complete, and delete ToDo items
              from a lis
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiHtml5 className="work-dev-icons" />
              <FaCss3Alt className="work-dev-icons" />
              <FaVuejs className="work-dev-icons" />
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <a
              href="https://scarpantonio.github.io/pokecards/"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Title>PokeDex</Card.Title>
            </a>
            <Card.Text>
              Basic app build with Jquery that gets data, displays it in a
              responsive layout, and uses advanced UI patterns to display more
              details of individual pokémon characters.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <DiHtml5 className="work-dev-icons" />
              <FaCss3Alt className="work-dev-icons" />
              <DiJqueryLogo className="work-dev-icons" />
            </small>
          </Card.Footer>
        </Card>

        <Container fluid className="work-section-two">
          <Row>
            <Col>
              <h1 className="work-sectiontwo-title">
                <strong>
                  <p>My Startup Project</p>
                </strong>
                <p className="p-subtitle">
                  As a developer, I am not only passionate about technology,{" "}
                  <br />
                  I'm also passionate about finding new ways to use it to
                  improve the lives of people in urgent need.
                </p>
              </h1>
            </Col>
          </Row>
        </Container>

        <Container fluid className="startup-section">
          <Row>
            <Col>
              <h1 className="work-title">
                <AiFillHeart className="msl-icons" />

                <strong>
                  <p>Madre sin limites</p>
                </strong>
                <p className="msl-p-subtitle">
                  501c3 Non-profit organization that provides special
                  supplemental nutrition for Women, Infants, and Children who
                  are under nutritional risk in Venezuela.
                  <a
                    href="https://www.madresinlimites.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    visit website{" "}
                  </a>
                </p>
              </h1>
            </Col>
          </Row>
        </Container>

        <Container fluid className="work-section-three">
          <Row>
            <Col>
              <h1 className="work-sectionthree-title">
                <p>Interested in collaborating or donating?</p>

                <p className="p-subtitle">
                  There will always be people in need until we decide to do
                  something about it.
                </p>

                <Button bsPrefix="super-btn" as={Link} to="/contact-msl">
                  Start a conversation
                </Button>
              </h1>
            </Col>
          </Row>
        </Container>
      </CardDeck>{" "}
      <Footer />
    </div>
  );
};

export default Work;

// <Card>
//           <Card.Body>
//             <Card.Title>Crime app</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural
//               lead-in to additional content. This card has even longer content
//               than the first to show that equal height action.
//               <small className="text-muted">View Website</small>
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">
//               <DiAngularSimple className="dev-icons" />
//               <DiHtml5 className="dev-icons" />
//             </small>
//           </Card.Footer>
//         </Card>

// <Card>
//           <Card.Body>
//             <Card.Title>Carmen Quintero</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural
//               lead-in to additional content. This card has even longer content
//               than the first to show that equal height action.
//               <small className="text-muted">View Website</small>
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">
//               <DiAngularSimple className="dev-icons" />
//               <DiHtml5 className="dev-icons" />
//             </small>
//           </Card.Footer>
//         </Card>
