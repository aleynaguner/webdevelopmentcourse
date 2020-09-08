import React from "react";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter.js";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col xs="4"></Col>
          <Col xs="4">
            <Counter />
          </Col>
          <Col xs="4"></Col>
        </Row>
        <Row>
          <Col xs="4">
            <IncreaseCounter />
          </Col>
          <Col xs="4">
            <DecreaseCounter />
          </Col>
          <Col xs="4">
            <IncreaseByTwoCounter />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <IncreaseCounter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
