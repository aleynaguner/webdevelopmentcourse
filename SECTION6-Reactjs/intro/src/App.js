import React, { Component } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";

// json-server --wathch db.json

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url="http://localhost:3000/products";
    if(categoryId){
      url+=`?categoryId=${categoryId}`
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  showSelectedCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  render() {
    let infoCategory = { title: "Category List" };
    let infoProduct = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                showSelectedCategory={this.showSelectedCategory}
                info={infoCategory}
              />
            </Col>
            <Col xs="8">
              <ProductList
                getProducts={this.getProducts}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={infoProduct}
              />
            </Col>
            <Col xs="1"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
