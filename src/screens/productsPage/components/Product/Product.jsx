import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  render() {
    return (
      <div className="product-container">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${this.props.img})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="product-details">
          <div>{this.props.name}</div>
          <div className="brand">{this.props.brand}</div>
          <div>{this.props.price}</div>
        </div>
      </div>
    );
  }
}
