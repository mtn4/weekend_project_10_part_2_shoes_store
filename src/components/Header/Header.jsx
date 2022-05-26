import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/">Shoes Store</Link>
        </div>
        <div className="categories">
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/sell">Sell</Link>
          </div>
        </div>
        <div>
          <HiOutlineShoppingCart style={{ fontSize: 26 }} />
        </div>
      </div>
    );
  }
}
