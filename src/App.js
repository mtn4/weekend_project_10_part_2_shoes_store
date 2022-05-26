import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import productsPage from "./screens/productsPage/productsPage";
import productDetailsPage from "./screens/productDetailsPage/productDetailsPage";
import errorPage from "./screens/errorPage/errorPage";
import homePage from "./screens/homePage/homePage";
import sellPage from "./screens/sellPage/sellPage";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={homePage} />
            <Route path="/products" exact component={productsPage} />
            <Route path="/products/:id" component={productDetailsPage} />
            <Route path="/sell" exact component={sellPage} />
            <Route component={errorPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
