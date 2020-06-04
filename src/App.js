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
    discount: "DISCOUNT",
    applied: false
  };

  clickHandler = discount => {
    this.setState(
      () => {
        return {
          applied: true,
          discount: ""
        };
      },
      () => {
        this.setState(() => {
          return {
            total: this.state.total * 0.9
          };
        });
      }
    );
  };

  changeHandler = e => {
    this.setState({ discount: e.target.value });
  };

  componentDidMount() {
    this.setState(
      () => {
        return {
          taxes: (this.state.price + this.state.savings) * 0.12
        };
      },
      function () {
        this.setState(() => {
          return {
            total: this.state.price + this.state.savings + this.state.taxes
          };
        });
      }
    );
  }

  render() {
    const { discount, applied } = this.state;
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal />
          <Pickup />
          <EstimatedTaxes />
          <hr />
          <Total />
          <br />
          <ItemDetails />
          <hr />
          <PromoCode applied={applied} changeHandler={this.changeHandler} clickHandler={this.clickHandler} />
        </Container>
      </div>
    );
  }
}

export default App;
