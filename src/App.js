import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import SubTotal from "./components/SubTotal";
import Pickup from "./components/Pickup";
import EstimatedTaxes from "./components/EstimatedTaxes";
import Total from "./components/Total";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";

export class App extends Component {
  state = {
    price: 100,
    savings: -4.5,
    taxes: 10,
    total: 980
  };

  render() {
    const { price, savings, taxes, total } = this.state;
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={price} />
          <Pickup price={savings} />
          <EstimatedTaxes taxes={taxes} />
          <hr />
          <Total total={total.toFixed(2)} />
          <br />
          <ItemDetails />
          <hr />
          <PromoCode />
        </Container>
      </div>
    );
  }
}

export default App;
