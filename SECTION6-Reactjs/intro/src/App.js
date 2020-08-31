import React, { Component } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import CartList from "./components/CartList";
// import Form from "./components/Form";

// json-server --watch db.json

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  showSelectedCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((x) => x.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " is added.", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((x) => x.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " is removed.", 2);
  };

  render() {
    let infoCategory = { title: "Category List" };
    let infoProduct = { title: "Product List" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                showSelectedCategory={this.showSelectedCategory}
                info={infoCategory}
              />
            </Col>
            <Col xs="8">
              {/* Switch routelar arası geziyor
                  Parametre ile göndermek istediğimiz component var ise render ile yapıyoruz */}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      getProducts={this.getProducts}
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={infoProduct}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </Col>
            <Col xs="1"></Col>
          </Row>
          {/* <Row>
            <Form/>
          </Row> */}
        </Container>
      </div>
    );
  }
}
