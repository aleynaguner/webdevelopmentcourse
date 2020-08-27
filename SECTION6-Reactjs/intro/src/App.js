import React from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row , Col } from "reactstrap";

function App() {
  let infoCategory = {title:"Category List"}
  let infoProduct = {title:"Product List"}

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={infoCategory}/>
          </Col>
          <Col xs="9">
            <ProductList info={infoProduct}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
