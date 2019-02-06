import React, { Component } from "react";
import styled from "styled-components";

const QuantityBox = styled.div`
  display: flex;
`;

const QuantityButton = styled.div`
  line-height: 40px;
  width: 40px;
  background-color: #e5e5e5;
  box-shadow: none;
  text-align: center;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
`;

const Sum = styled.input`
  width: 72px;
  height: 40px;
  line-height: 50px;
  margin: 0 16px;
  text-align: center;
`;

const CommonButton = ({ value, action }) => {
  return <QuantityButton onClick={action}>{value}</QuantityButton>;
};

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: this.props.value ? this.props.value : 0,
      min: this.props.min ? this.props.min : 0,
      max: this.props.max ? this.props.max : Infinity
    };
  }

  plus = () => {
    if (this.state.sum < this.state.max) {
      const num = this.state.sum + 1;
      this.setState({ sum: num });
      this.props.changeHandler(num);
    }
  };

  minus = () => {
    if (this.state.sum > this.state.min) {
      const num = this.state.sum - 1;
      this.setState({ sum: num });
      this.props.changeHandler(num);
    }
  };

  changeHandler = e => {
    const num = Number(e.target.value);
    this.setState({ sum: num });
    this.props.changeHandler(num);
  };

  render() {
    return (
      <QuantityBox>
        <CommonButton value="-" action={this.minus} />
        <Sum value={this.state.sum} onChange={e => this.changeHandler(e)} />
        <CommonButton value="+" action={this.plus} />
      </QuantityBox>
    );
  }
}

export default Quantity;
