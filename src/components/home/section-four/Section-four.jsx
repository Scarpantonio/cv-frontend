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
            <AiFillBug className="dev-icons-home-page" />
            <h4 className="icon-title-section-four">#Problem solving</h4>

            <p class="p-sm">
              We will always find problems no matter what you do, but in every
              new challenge, we'll also find an opportunity to learn something
              new.
            </p>
          </Col>

          <Col sm className="icon-section-five">
            <AiFillHeart className="dev-icons-home-page" />
            <h4 className="icon-title-section-four">
              <strong>#</strong> Teamwork
            </h4>
            <p class="p-sm">
              You'll never reach your full potential if you only work isolated
              without a good and smart team feedback.
            </p>
          </Col>

          <Col sm className="icon-section-five">
            <AiFillTrophy className="dev-icons-home-page" />

            <h4 className="icon-title-section-four">#Always learning</h4>
            <p class="p-sm">
              New technologies are always being release, is always a good
              practice to be open minded and study the new ways and
              opportunities that new technology bring to us.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
