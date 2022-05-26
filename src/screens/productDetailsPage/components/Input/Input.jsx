import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  render() {
    return (
      <div className="input-container">
        <div>{this.props.label}</div>
        <div>
          <input
            type="text"
            value={this.props.value}
            name={this.props.name}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}
