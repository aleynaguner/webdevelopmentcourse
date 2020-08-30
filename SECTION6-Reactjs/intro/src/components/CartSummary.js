import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Badge,
  NavbarText,
  NavItem,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart Item - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color="success">{cartItem.quantity}</Badge>
              {cartItem.product.productName}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart(){
      return (
          <NavItem>
              <NavbarText>Empty Cart</NavbarText>
          </NavItem>
      )
  }
  render() {
    return (
        <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
    </div>
    )
  }
}
