import React, { Component } from 'react'

export default class ProductList extends Component {
    //constructor'a gerek olmadan kullanabiliyoruz.
    render() {
        return (
            <div>
                <h4>{this.props.info.title}</h4>
            </div>
        )
    }
}
