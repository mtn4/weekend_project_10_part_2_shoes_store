import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class errorPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>404 - Not found</h3>
        </div>
        <Link to="/">Go to Homepage</Link>
      </div>
    );
  }
}
