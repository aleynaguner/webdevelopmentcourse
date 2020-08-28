import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  //constructor'a gerek olmadan kullanabiliyoruz.
  render() {
    return (
      <div>
        <h4>
          {this.props.info.title} - {this.props.currentCategory}
        </h4>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity for Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
