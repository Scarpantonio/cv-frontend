import "./App.css";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Navigationbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import SectionOne from "./components/section-one/section-one";
// import NotFoundPage from "./components/notFoundPage/notFoundPage";
import { AiFillBug, AiFillHeart, AiFillTrophy } from "react-icons/ai";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import { FaVuejs, FaCss3Alt } from "react-icons/fa";

// Problemas: los breakpoints "XS" "MD" dejaron de funcionar cuando vamos a resolucion mobil, revisar que sucede. .  Importante: el margen izquierdo derecho de cada seccion, deben ser considerables. asi se adapta facil a otras resoluciones en lo especial a la resolucion mobil.

function App() {
  return (
    <Router basename="/client">
      <div className="App">
        <Navigationbar />
        <SectionOne />
        <Switch>
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>

        <div>
          <h4 className="section-two-title">
            <strong>MY FULL STACK TOOLKIT...</strong>
          </h4>
          <div class="scrollmenu">
            <p>
              {" "}
              <DiAtom className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiAngularSimple className="dev-icons" />
            </p>
            <p>
              {" "}
              <FaVuejs className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiJavascript1 className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiHtml5 className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiJqueryLogo className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiMongodb className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiNodejsSmall className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiSass className="dev-icons" />
            </p>
            <p>
              {" "}
              <FaCss3Alt className="dev-icons" />
            </p>
            <p>
              {" "}
              <DiPhotoshop className="dev-icons" />
            </p>
          </div>
        </div>

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
                I'm a Junior full Stack web developer located in Denver,
                Colorado. I'm a full Stack web developer located in Denver,
                Colorado.
              </p>
              <Button>Let's Chat!</Button>
            </Col>
          </Row>
        </Container>

        <h4 className="section-five-title">
          <strong>HOW I SEE LIFE AND WORK...</strong>
        </h4>
        <Container fluid className="section-five">
          <Row>
            <Col sm className="icon-section-five">
              <AiFillBug className="dev-icons" />
              <h4>#Problem solving</h4>

              <p class="p-sm">
                Siempre encontraremos problemas sin importar a que nuevos retos
                te enfrentes. Lo importante es tener la actitud correcta estando
                consiente que en cada problema hay una oportunidad de aprender.
              </p>
            </Col>

            <Col sm className="icon-section-five">
              <AiFillHeart className="dev-icons" />
              <h4>#Teamwork</h4>
              <p class="p-sm">
                En la busqueda de la oportunidad de trabajar con un equipo de
                desarrolladores motivados donde todos podemoas compartir nuestro
                conocimiento.
              </p>
            </Col>

            <Col sm className="icon-section-five">
              <AiFillTrophy className="dev-icons" />

              <h4>#Always learning</h4>
              <p class="p-sm">
                al toparme con una nueva teconologia no pueda esperar en conocer
                cuales son las nuevas ventajas y como revolucionara la manera en
                que trabajamos.
              </p>
            </Col>
          </Row>
        </Container>

        <Container id="work" className="section-one">
          <Row>
            <Col sm className="left-col-title header">
              <h2 className="left-col-real-title">
                <b>Check My Work On Github!</b>
              </h2>
              <p>
                He desarrollado aplicaciones con diferentes teconologias entre
                las princiaples ReactJs y nodeJS{" "}
              </p>
              <Button>Check Work!</Button>
            </Col>

            <Col sm className="right-col-img">
              <DiGithubBadge className="github-icon" />
            </Col>
          </Row>
        </Container>

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
    </Router>
  );
}

export default App;

// <Container fluid className="section-two">
//         <Row>
//           <Col>
//             <p>
//               <strong>MY FULL STACK TOOLKIT...</strong>
//             </p>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <DiAtom className="dev-icons" />
//           </Col>
//           <Col>
//             <DiAngularSimple className="dev-icons" />
//           </Col>
//           <Col>
//             <FaVuejs className="dev-icons" />
//           </Col>
//           <Col>
//             <DiJavascript1 className="dev-icons" />
//           </Col>
//           <Col>
//             <DiHtml5 className="dev-icons" />
//           </Col>
//           <Col>
//             <DiJqueryLogo className="dev-icons" />
//           </Col>
//           <Col>
//             <DiMongodb className="dev-icons" />
//           </Col>
//           <Col>
//             <DiNodejsSmall className="dev-icons" />
//           </Col>
//           <Col>
//             <DiSass className="dev-icons" />
//           </Col>
//           <Col>
//             <FaCss3Alt className="dev-icons" />
//           </Col>
//           <Col>
//             <DiPhotoshop className="dev-icons" />
//           </Col>
//         </Row>
//       </Container>

// <div className="sec-two-title">
//         <p>
//           <strong>Carlos' Full Stack Toolkit</strong>
//         </p>
//       </div>

// section 4 video section save code for localStorage.
// <Container fluid className="section-four">
//         <Row>
//           <Col>
//             <h1>Here we're going to have a video</h1>
//           </Col>
//         </Row>
//       </Container>

// titulo que quiero agregar por encime de de los 3 keys aspecs of working with me.
// <Row>
//             <Col xs className="icon-section-five">
//               <h4>3 things you should know about me</h4>
//             </Col>
//           </Row>
