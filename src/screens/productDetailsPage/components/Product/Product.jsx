import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div className="shoes-details-container">
        <div
          className="shoes-image"
          style={{
            backgroundImage: `url(${this.props.img})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="details-container">
          <div>{this.props.name}</div>
          <div className="brand">{this.props.brand}</div>
          <div>{this.props.price}</div>
        </div>
      </div>
    );
  }
}
