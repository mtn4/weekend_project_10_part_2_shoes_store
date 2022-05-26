import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import CircleLoader from "react-spinners/CircleLoader";
import Product from "./components/Product/Product";
import "./productsPage.css";

export default class productsPage extends Component {
  state = { shoesArr: [], loading: false };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get();
    this.setState({ shoesArr: response.data, loading: false });
  }
  renderShoes = () => {
    return this.state.shoesArr.map((product, index) => (
      <div key={product.id}>
        <Link
          key={product.id}
          to={`${this.props.location.pathname}/${product.id}`}
        >
          <Product
            img={product.img}
            name={product.name}
            brand={product.brand}
            price={product.price}
          />
        </Link>
      </div>
    ));
  };

  render() {
    return (
      <div className="products-container">
        {this.state.loading ? (
          <div className="spinner">
            <CircleLoader color={"blue"} loading={true} size={200} />
          </div>
        ) : (
          <div className="shoes-container">{this.renderShoes()}</div>
        )}
      </div>
    );
  }
}
