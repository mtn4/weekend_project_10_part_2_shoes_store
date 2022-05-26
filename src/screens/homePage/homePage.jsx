import React, { Component } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
export default class homePage extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="welcome">Welcome to my shoes store!</div>
        <div className="home-categories">
          <Link to="/products">
            <div className="category-box buy">Buy</div>
          </Link>
          <Link to="/sell">
            <div className="category-box sell">Sell</div>
          </Link>
        </div>
      </div>
    );
  }
}
