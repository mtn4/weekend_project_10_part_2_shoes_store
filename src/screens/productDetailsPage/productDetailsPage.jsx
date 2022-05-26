import React, { Component } from "react";
import Product from "./components/Product/Product";
import Button from "./components/Button/Button";
import Edit from "./components/Edit/Edit";
import CircleLoader from "react-spinners/CircleLoader";
import api from "../../apis/api";
import "./productDetailsPage.css";
export default class productDetailsPage extends Component {
  state = { shoesObj: {}, loading: false, removed: false, edit: false };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get(this.props.match.params.id);
    this.setState({ shoesObj: response.data, loading: false });
  }
  handleBack = () => {
    this.props.history.goBack();
  };
  handleDelete = async () => {
    this.setState({
      loading: true,
    });
    await api.delete(`${this.props.match.params.id}`);
    this.setState({ loading: false, removed: true });
  };
  handleEdit = () => {
    this.setState({ edit: true });
  };
  renderShoesDetails = () => {
    return (
      <div>
        <Product
          name={this.state.shoesObj.name}
          brand={this.state.shoesObj.brand}
          price={this.state.shoesObj.price}
          img={this.state.shoesObj.img}
        />
        <div className="btn-container">
          <Button text="Edit" onClick={this.handleEdit} />
          <Button text="Delete" onClick={this.handleDelete} />
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="product-details-container">
        {this.state.removed ? (
          <div className="removed">You removed the product successfully!</div>
        ) : this.state.loading ? (
          <div className="spinner">
            <CircleLoader color={"blue"} loading={true} size={200} />
          </div>
        ) : this.state.edit ? (
          <>
            <Edit
              name={this.state.shoesObj.name}
              brand={this.state.shoesObj.brand}
              price={this.state.shoesObj.price}
              img={this.state.shoesObj.img}
              id={this.props.match.params.id}
            />
          </>
        ) : (
          <>{this.renderShoesDetails()}</>
        )}
      </div>
    );
  }
}
