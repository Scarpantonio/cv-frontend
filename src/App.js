import "./App.css";
import { Image, Container, Row, Col, Button, Nav } from "react-bootstrap";
import Navigationbar from "./components/navbar/navbar";

// Importante: el margen izquierdo derecho de cada seccion, deben ser considerables. asi se adapta facil a otras resoluciones en lo especial a la resolucion mobil.

function App() {
  return (
    <div className="App">
      <Navigationbar />

      <Container className="section-one">
        <Row>
          <Col id="hello" className="left-col-title">
            <h2 className="left-col-real-title">
              <b>Let's build amazing web apps together!</b>
            </h2>
            <p>I'm a full Stack web developer located in Denver, Colorado.</p>
            <Button>Say Hello</Button>
          </Col>

          <Col md className="right-col-img">
            <Image alt="carlos img" src="/public/img/carlos.png" responsive />
          </Col>
        </Row>
      </Container>

      <Container fluid className="section-two">
        <Row className="technologies">
          <Col>React JS</Col>
          <Col>Vuejs</Col>
          <Col>Angular</Col>
          <Col>HTML/CSS</Col>
        </Row>
      </Container>

      <Container className="section-three">
        <Row>
          <Col className="right-col-img">Image</Col>

          <Col className="left-col-title">
            <h3>
              <b>
                Hi there, my name's <br /> Carlos Scarpantonio
              </b>
            </h3>
            <p>
              No-bullshit programs on self-development, filmmaking &
              creativity,No-bullshit programs on self-development, filmmaking &
              creativity by Carlos Scarpantonio
            </p>
            <Button>Let's Chat!</Button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="section-four">
        <Row>
          <Col>
            <h1>Here we're going to have a video</h1>
          </Col>
        </Row>
      </Container>

      <Container fluid className="section-five">
        <Row>
          <Col sm>
            <img alt="icon" href=""></img>
            <h4>Problem solving</h4>
            <p class="p-sm">
              We’ve been led to believe that success happens overnight. But
              embracing real growth is about committing to the journey. And it
              all begins with having the right mindset.
            </p>
          </Col>

          <Col sm>
            <img alt="icon2" href=""></img>
            <h4>Team work</h4>
            <p class="p-sm">
              We’ve been led to believe that success happens overnight. But
              embracing real growth is about committing to the journey. And it
              all begins with having the right mindset.
            </p>
          </Col>

          <Col sm>
            <img alt="icon3" href=""></img>
            <h4>Hard work</h4>
            <p class="p-sm">
              We’ve been led to believe that success happens overnight. But
              embracing real growth is about committing to the journey. And it
              all begins with having the right mindset.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="section-one">
        <Row>
          <Col className="left-col-title">
            <h2>
              <b>Check my work on Github</b>
            </h2>
            <p>
              Apps build with React, Hooks, Reduxs, Vue, Angular and Jquery,
              HTML/CSS
            </p>
            <Button>go to github!</Button>
          </Col>
          <Col md className="right-col-img">
            Image
          </Col>
        </Row>
      </Container>

      <Container fluid className="section-seven">
        <Row>
          <Col className="left-col-title">
            <h3>
              <b>Download my resume</b>
            </h3>
            <p>
              Apps build with React, Hooks, Reduxs, Vue, Angular and Jquery,
              HTML/CSS Apps build with React, Hooks, Reduxs, Vue, Angular and
              Jquery, HTML/CSS
            </p>
            <Button>Download now!</Button>
          </Col>
        </Row>
      </Container>

      <div className="footer-container">
        <Nav
          id="top-footer"
          className=" justify-content-center"
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link href="/home">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav>Copyright 2020 Carlos Scarpantonio</Nav>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="">Terms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">Privacy</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default App;
