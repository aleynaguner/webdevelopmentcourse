import React, { Component } from "react";
import CartSummary from "./CartSummary";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nortwind App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/products/">Products</NavLink>
            </NavItem>
            <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}></CartSummary>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
