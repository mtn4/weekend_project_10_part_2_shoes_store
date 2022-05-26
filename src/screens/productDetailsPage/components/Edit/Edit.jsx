import React, { Component } from "react";
import Input from "../Input/Input";
import api from "../../../../apis/api";
import CircleLoader from "react-spinners/CircleLoader";
import "./Edit.css";
export default class Edit extends Component {
  state = {
    loading: false,
    finished: false,
    error: false,
    name: "",
    brand: "",
    img: "",
    price: "",
  };
  componentDidMount() {
    this.setState({
      name: this.props.name,
      brand: this.props.brand,
      img: this.props.img,
      price: this.props.price.substring(1),
    });
  }
  handleInputField = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleEdit = async () => {
    const regex = /[a-zA-Z]/;
    const checkPrice = /^\d+$/.test(this.state.price);
    const checkName = regex.test(this.state.name);
    const checkBrand = regex.test(this.state.brand);
    if (
      !checkName ||
      !checkBrand ||
      !this.state.img.match(/^https?:\/\/.+\/.+$/) ||
      !checkPrice
    ) {
      this.setState({ error: true }, () => {
        setTimeout(() => {
          this.setState({ error: false });
        }, 2000);
      });
      return;
    }
    this.setState({ loading: true });
    const newShoes = {
      name: this.state.name,
      img: this.state.img,
      brand: this.state.brand,
      price: "$" + this.state.price,
    };
    await api.put(`${this.props.id}`, newShoes);
    this.setState((prevState) => ({
      loading: false,
      finished: true,
    }));
  };
  render() {
    return (
      <div className="sell-container">
        {this.state.finished ? (
          <div className="finished">Edited Successfully!</div>
        ) : this.state.loading ? (
          <div className="spinner">
            <CircleLoader color={"blue"} loading={true} size={200} />
          </div>
        ) : (
          <>
            <div className="sell-logo">Edit Shoes</div>
            <div className="sell-item">
              <Input
                label="Shoes Name"
                onChange={this.handleInputField}
                name={"name"}
                value={this.state.name}
                type="text"
              />
              <Input
                label="Brand"
                onChange={this.handleInputField}
                name={"brand"}
                value={this.state.brand}
                type="text"
              />
              <Input
                label="Price ($)"
                onChange={this.handleInputField}
                name={"price"}
                value={this.state.price}
                type="text"
              />
              <Input
                label="Image URL"
                onChange={this.handleInputField}
                name={"img"}
                value={this.state.img}
                type="text"
              />
              <div
                className="input-error"
                style={
                  this.state.error
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                There is an error in the input. Please fix it.
              </div>
              <button onClick={this.handleEdit}>Submit</button>
            </div>
          </>
        )}
      </div>
    );
  }
}
