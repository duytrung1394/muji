import React, { Component } from "react";
import CreditCardInformation from "./creditCardInformation";

class Form extends Component {
  state = {
    entity: {
      cardNo1: "",
      cardNo2: "",
      cardNo3: "",
      cardNo4: "",
      limitMonth: "",
      limitYear: "",
      securityCode: "",
      giftCardNo: "",
      pinNo: ""
    }
  };

  updateEntity = (name, value) => {
    const entity = {
      ...this.state.entity,
      [name]: value
    };
    this.setState({ entity: entity });
  };

  render() {
    return (
      <CreditCardInformation
        entity={this.state.entity}
        updateEntity={(name, value) => this.updateEntity(name, value)}
      />
    );
  }
}

export default Form;
