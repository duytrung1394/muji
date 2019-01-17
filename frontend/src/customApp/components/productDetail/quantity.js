import React, { Component } from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import AntCheckbox from "../../../components/uielements/styles/checkbox.style";

const QuantityBox = styled.div`
  display: flex;
`;

const Button = styled.div`
  line-height: 50px;
  width: 50px;
  background-color: #e5e5e5;
  box-shadow: none;
  text-align: center;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
`;

const Sum = styled.input`
  width: 82px;
  height: 50px;
  line-height: 50px;
  margin: 0 16px;
  text-align: center;
`;

const CommonButton = ({ value, action }) => {
  return <Button onClick={action}>{value}</Button>;
};

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sam: 0
    };
  }

  plus = () => {
    this.setState(() => {
      return { sam: this.state.sam + 1 };
    });
  };

  minus = () => {
    if (this.state.sam > 0) {
      this.setState(() => {
        return { sam: this.state.sam - 1 };
      });
    }
    null;
  };

  render() {
    return (
      <div>
        <p>
          <IntlMessages id="productDetail.quantity" />
        </p>
        <QuantityBox>
          <CommonButton value="-" action={this.minus} />
          <Sum value={this.state.sam} />
          <CommonButton value="+" action={this.plus} />
        </QuantityBox>
      </div>
    );
  }
}

export default Quantity;
