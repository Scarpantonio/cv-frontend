import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillBug, AiFillHeart, AiFillTrophy } from "react-icons/ai";

export default function SectionFour() {
  return (
    <div>
      <h4 className="section-five-title">
        <strong>MY PERSPECTIVE ON LIFE AND WORK...</strong>
      </h4>
      <Container fluid className="section-five">
        <Row>
          <Col sm className="icon-section-five">
            <AiFillBug className="dev-icons" />
            <h4>#Problem solving</h4>

            <p class="p-sm">
              Siempre encontraremos problemas sin importar a que nuevos retos te
              enfrentes. Lo importante es tener la actitud correcta estando
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
    </div>
  );
}
